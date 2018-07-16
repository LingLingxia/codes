const CONFIG=require('./config.js');
const COMMON=require('./common.js');
const fs = require('fs');



function run(){
    function mkd(pathname){
        fs.mkdir(pathname,(err)=>{
            if(err) throw err;
            it.next();
        })
    }
    function *foo(){
        var arr=['dist','dist/assets','dist/assets/css','dist/assets/js'];
        for(let i=0;i<arr.length;i++){
            yield mkd(arr[i]);
        }
    }
    
    let it=foo();
}




var filess = fs.readdirSync('page');
const lang=CONFIG.lang,
      globalP=COMMON.page,
      globalL=COMMON.lang,
      regL=/{L\[(.+?)\]}/g,
      regP=/{P\[(.+?)\]}/g;

for(let l of lang){
      fs.mkdirSync(`dist/${l}`);
}
filess.forEach((item, index) => {

      var files = fs.readdirSync(`page/${item}`);

      if (files.indexOf('page.js') > 0) {
            var multiLang=false;
            var m={},//所有的资源链接
            L={};//页面内语言包
            
            //以页面的多语言为准生成页面
            let pageLang=replaceLang(`page/${item}`);
            let data=require(`./page/${item}/page.js`);
            m.cssLoader=[],m.jsLoader=[],m.cssLink=[],m.jsLink=[];
            var { components ,pageAssets, P } = data;
            P=P||{};//页面配置
            let componentP={};
            if(fs.readdirSync(`page/${item}`).indexOf('component.js')>=0){
                  componentP=require(`./page/${item}/component.js`);
            }

            if(pageAssets){
                  mergeAsserts(m,pageAssets,`page/${item}`);
            }
            if(pageLang.length>0){//这个页面有多语言
                  multiLang=true;
                  for(let l of pageLang){
                        fs.mkdirSync(`dist/${l}/${item}`);
                        L[l]=getLangPack(`page/${item}`,l);
                        copyNotExist(L[l],globalL[l]);
                        generateMultiLanPage(components,item,m,l,L);
                  }
            }else{
                  generateMultiLanPage(components,item,m,'en',L);
                  fs.mkdirSync(`dist/en/${item}`)
            }
            copyNotExist(P,globalP);
            if(multiLang){
                  for(let l of pageLang){
                        replaceLinksAndPages(item,m,l,P,componentP,regP,`page/${item}/components.js`);
                  }
            }else{
                  replaceLinksAndPages(item,m,'en',P,componentP,regP,`page/${item}/components.js`);
            }

      }
});


function replaceLinksAndPages(item,m,l,firstData,secondData,reg,path){
      let indexHtml= fs.readFileSync(`dist/${l}/${item}/index.html`).toString();

      let css=createLink(unique(m.cssLink),'css',true) + createLink(unique(m.cssLoader),'css',false);
      let js=createLink(unique(m.jsLink),'js',true) + createLink(unique(m.jsLoader),'js',false);

      var k= indexHtml.replace('{{link}}',css).replace('{{script}}',js);
      k=replaceContent(firstData,secondData,k,reg,path);

      fs.writeFileSync(`dist/${l}/${item}/index.html`,k);
}


function generateMultiLanPage(components,item,m,l,L){
      for (var com in components) {

            let [mode, dir] = components[com].split('/');

            let path = mode == 'global' ? `components/${dir}` : `page/${item}/components/${dir}`;

            let content = fs.readFileSync(`${path}/template.html`,'utf8');//在这里检测，替换，然后再拼接

            //这里只需要检测语言包文件是否存在 l就是当前的语言，如果不存在，就用page的语言替换了。
                  let currentLangPack={};

                  if(fs.readdirSync(path).indexOf('lang')>=0&&fs.readdirSync(`${path}/lang`).indexOf(`${l}.js`)>=0){
                         currentLangPack= getLangPack(path,l);
                  }

             content=  replaceContent(L[l],currentLangPack,content,regL,`${path}/template.html`);
             
   
            fs.appendFileSync(`dist/${l}/${item}/index.html`, content);

            //拼接template
            let componentsDir=fs.readdirSync(path);

            if(componentsDir.indexOf('component.js')>=0){
                  let a=require(`./${path}/component.js`);
                  mergeAsserts(m,a,path);
            }
      }

}

function replaceContent(firstData,secondData,content,reg,path){
      let ret=content;
      var matches=reg.exec(ret);//检测需要替换的key
      while(matches){
            let target=matches[1];
            let targetLang;
  
            if(!firstData[target]&&!secondData[target]){
                  try{
                        throw new Error(`undefined ${target} in ${path}`);
                  }catch(err){
                        console.log(err);
                  }

            }else{
                  targetLang=firstData[target]||secondData[target];
                  ret= ret.replace(matches[0],targetLang);
            }
            matches=reg.exec(ret)
      }

      return ret;
}


function createLink(links,type,source){
      let ret='';
      let mod='';
      if(type=='css'){
            mod = `<link rel='stylesheet' href=`;
      }else if(type=='js'){
            mod=`<script type='application/javascript' src=`;
      }

      for(let link of links){
            let l=source?link:`assets/${type}/${link}.${type}`;
            ret+=`${mod}'${l}'/>\n`;
      }
      return ret;
}
function appendFile(dist,source){
      fs.appendFileSync(dist,fs.readFileSync(source));
}
function unique( arr ){
      if(arr.length<=0) return [];

      arr.sort();
      let ret=[];
      ret[0]=arr[0];
      let k=1,len=arr.length,i=1;
      while(i<len){
            if(arr[i]==arr[i-1]){
                  i++;
            }else{
                  ret[k++]=arr[i++];
            }
      }
      return ret;
}

function  mergeAsserts(dist,origin,path){

            if(origin.linkCss){
                  dist.cssLink= dist.cssLink.concat(origin.linkCss);
            }
            if(origin.linkJs){
                  dist.jsLink=dist.jsLink.concat(origin.linkJs);
            }
            if(origin.localCss){
                  for(let link in origin.localCss){
                        dist.cssLoader.push(link);
                        for(let l of origin.localCss[link]){
                              appendFile(`dist/assets/css/${link}.css`,`${path}/assets/${l}`);
                        }
                  }
            }
            if(origin.localJs){
                  for (let link in origin.localJs){
                        dist.jsLoader.push(link);
                        for(let l of origin.localJs[link]){
                              appendFile(`dist/assets/js/${link}.js`,`${path}/assets/${l}`);
                        }
                  }
            }
}

function getLangPack(path,lang){

      let ret;
      try{
            ret= require(`./${path}/lang/${lang}.js`);
            return ret;
      }catch (err){
            throw err;
      }
}
function replaceLang(path){
      let tmp=fs.readdirSync(path);
      if(tmp.indexOf('lang')<0) return [];


     let ret = fs.readdirSync(`${path}/lang`).map((item)=>{
            return item.split('.')[0];
      });
      return ret;
}

function  copyNotExist(firstObj,secondObj){
      for(let i in secondObj){
            if(!firstObj[i]){
                  firstObj[i]=secondObj[i];
            }
      }
}