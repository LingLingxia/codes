const CONFIG = require('./config.js');
const COMMON = require('./common.js');
const fs = require('fs');
const path = require('path');


function chunk(fn) {
      var self = this;
      return function () {
            var arg = Array.prototype.slice.call(arguments, 0);
            arg[0] = path.resolve(__dirname, arg[0]);

            return new Promise((resolve, reject) => {

                  fn.call(self, ...arg, (err, data) => {
                        if (err) reject(err);
                        resolve(data);
                  })
            })

      }
}

var mkd = chunk(fs.mkdir);
var mkArr = [];
mkArr.push(mkd('dist'));
mkArr.push(mkd('dist/assets'));
mkArr.push(mkd('dist/assets/css'));
mkArr.push(mkd('dist/assets/js'));


var readDir = chunk(fs.readdir);
var writeFile = chunk(fs.writeFile);
var apdFile = chunk(fs.appendFile);
var readFile = chunk(fs.readFile);



const regL = /{L\[(.+?)\]}/g,
      regP = /{P\[(.+?)\]}/g;

gen();

async function gen() {
      try {
            for (var i = 0; i < mkArr.length; i++) {
                  await mkArr[i];
            }

            var filess = await readDir('page');
            const lang = CONFIG.lang,
                  globalP = COMMON.page,
                  globalL = COMMON.lang;


            for (let l of lang) {
                  await mkd(`dist/${l}`);
            }

            for (var j = 0; j < filess.length; j++) {
                  var item = filess[j];
                  var files = await readDir(`page/${item}`);

                  if (files.indexOf('page.js') > 0) {
                        var multiLang = false;
                        var m = {}, //所有的资源链接
                              L = {}; //页面内语言包

                        //以页面的多语言为准生成页面
                        let pageLang = await replaceLang(`page/${item}`);
                        let data = require(`./page/${item}/page.js`);
                        m.cssLoader = [], m.jsLoader = [], m.cssLink = [], m.jsLink = [];
                        var {
                              components,
                              pageAssets,
                              P
                        } = data;
                        P = P || {}; //页面配置
                        let componentP = {};
                        var pageItem = await readDir(`page/${item}`);
                        if (pageItem.indexOf('component.js') >= 0) {
                              componentP = require(`./page/${item}/component.js`);
                        }

                        if (pageAssets) {
                              await mergeAsserts(m, pageAssets, `page/${item}`);
                        }
                        if (pageLang.length > 0) { //这个页面有多语言
                              multiLang = true;
                              for (let l of pageLang) {
                                    await mkd(`dist/${l}/${item}`);
                                    L[l] = getLangPack(`page/${item}`, l);
                                    copyNotExist(L[l], globalL[l]);
                                    await generateMultiLanPage(components, item, m, l, L);
                              }
                        } else {
                              await generateMultiLanPage(components, item, m, 'en', L);
                              await mkd(`dist/en/${item}`)
                        }
                        copyNotExist(P, globalP);
                        if (multiLang) {
                              for (let l of pageLang) {
                                    await replaceLinksAndPages(item, m, l, P, componentP, regP, `page/${item}/components.js`);
                              }
                        } else {
                              await replaceLinksAndPages(item, m, 'en', P, componentP, regP, `page/${item}/components.js`);
                        }

                  }
            }
      } catch (err) {
            console.log(err);
      }

}



async function replaceLinksAndPages(item, m, l, firstData, secondData, reg, path) {
      let indexHtml = await readFile(`dist/${l}/${item}/index.html`);
      indexHtml = indexHtml.toString();

      let css = createLink(unique(m.cssLink), 'css', true) + createLink(unique(m.cssLoader), 'css', false);
      let js = createLink(unique(m.jsLink), 'js', true) + createLink(unique(m.jsLoader), 'js', false);

      var k = indexHtml.replace('{{link}}', css).replace('{{script}}', js);
      k = replaceContent(firstData, secondData, k, reg, path);

      await writeFile(`dist/${l}/${item}/index.html`, k);
}


async function generateMultiLanPage(components, item, m, l, L) {
      for (var com in components) {

            let [mode, dir] = components[com].split('/');

            let path = mode == 'global' ? `components/${dir}` : `page/${item}/components/${dir}`;

            let content = await readFile(`${path}/template.html`, 'utf8'); //在这里检测，替换，然后再拼接

            //这里只需要检测语言包文件是否存在 l就是当前的语言，如果不存在，就用page的语言替换了。
            let currentLangPack = {};
            let path1 = await readDir(path);
            let path2 = await readDir(`${path}/lang`);
            if (path1.indexOf('lang') >= 0 && path2.indexOf(`${l}.js`) >= 0) {
                  currentLangPack = getLangPack(path, l);
            }

            content = replaceContent(L[l], currentLangPack, content, regL, `${path}/template.html`);


            await apdFile(`dist/${l}/${item}/index.html`, content);

            //拼接template
            let componentsDir = await readDir(path);

            if (componentsDir.indexOf('component.js') >= 0) {
                  let a = require(`./${path}/component.js`);
                  await mergeAsserts(m, a, path);
            }
      }

}

function replaceContent(firstData, secondData, content, reg, path) {
      let ret = content;
      var matches = reg.exec(ret); //检测需要替换的key
      while (matches) {
            let target = matches[1];
            let targetLang;

            if (!firstData[target] && !secondData[target]) {
                  try {
                        throw new Error(`undefined ${target} in ${path}`);
                  } catch (err) {
                        console.log(err);
                  }

            } else {
                  targetLang = firstData[target] || secondData[target];
                  ret = ret.replace(matches[0], targetLang);
            }
            matches = reg.exec(ret)
      }

      return ret;
}


function createLink(links, type, source) {
      let ret = '';
      let mod = '';
      if (type == 'css') {
            mod = `<link rel='stylesheet' href=`;
      } else if (type == 'js') {
            mod = `<script type='application/javascript' src=`;
      }

      for (let link of links) {
            let l = source ? link : `assets/${type}/${link}.${type}`;
            ret += `${mod}'${l}'/>\n`;
      }
      return ret;
}
async function appendFile(dist, source) {
      var tmp = await readFile(source);
      await apdFile(dist, tmp);
}

function unique(arr) {
      if (arr.length <= 0) return [];

      arr.sort();
      let ret = [];
      ret[0] = arr[0];
      let k = 1,
            len = arr.length,
            i = 1;
      while (i < len) {
            if (arr[i] == arr[i - 1]) {
                  i++;
            } else {
                  ret[k++] = arr[i++];
            }
      }
      return ret;
}

async function mergeAsserts(dist, origin, path) {

      if (origin.linkCss) {
            dist.cssLink = dist.cssLink.concat(origin.linkCss);
      }
      if (origin.linkJs) {
            dist.jsLink = dist.jsLink.concat(origin.linkJs);
      }
      if (origin.localCss) {
            for (let link in origin.localCss) {
                  dist.cssLoader.push(link);
                  for (let l of origin.localCss[link]) {
                        await appendFile(`dist/assets/css/${link}.css`, `${path}/assets/${l}`);
                  }
            }
      }
      if (origin.localJs) {
            for (let link in origin.localJs) {
                  dist.jsLoader.push(link);
                  for (let l of origin.localJs[link]) {
                        await appendFile(`dist/assets/js/${link}.js`, `${path}/assets/${l}`);
                  }
            }
      }
}

function getLangPack(path, lang) {

      let ret;
      try {
            ret = require(`./${path}/lang/${lang}.js`);
            return ret;
      } catch (err) {
            throw err;
      }
}
async function replaceLang(path) {
      let tmp = await readDir(path);
      if (tmp.indexOf('lang') < 0) return [];

      let pathLang = await readDir(`${path}/lang`);
      let ret = pathLang.map((item) => {
            return item.split('.')[0];
      });
      return ret;
}

function copyNotExist(firstObj, secondObj) {
      for (let i in secondObj) {
            if (!firstObj[i]) {
                  firstObj[i] = secondObj[i];
            }
      }
}
