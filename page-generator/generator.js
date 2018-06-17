const fs = require('fs');

fs.mkdirSync('dist');

fs.mkdirSync('dist/assets');
 fs.mkdirSync('dist/assets/css');
 fs.mkdirSync('dist/assets/js');
var filess = fs.readdirSync('page');

filess.forEach((item, index) => {

      var files = fs.readdirSync(`page/${item}`);

      if (files.indexOf('page.js') > 0) {

            fs.mkdirSync(`dist/${item}`);//一个页面的开始

            var cssLoader=[],jsLoader=[],cssLink=[],jsLink=[];

            //在遍历的时候拼接字符串，最后替换页面里面的内容   这里的变量只存链接，不做处理.

            let data=evalCode(`page/${item}/page.js`);

            var { components } = data;//注意，page里面也是有可能有这些东西的

            for (var com in components) {
            //一个组件的开始
                  let [mode, dir] = components[com].split('/');

                  let path = mode == 'global' ? `components/${dir}` : `page/${item}/components/${dir}`;

                  let contet = fs.readFileSync(`${path}/template.html`);;

                  fs.appendFileSync(`dist/${item}/index.html`, contet);

                  //拼接template
                  let componentsDir=fs.readdirSync(path);

                  if(componentsDir.indexOf('assets.js')>0){//打包所有的js和css组件里面的
                        
                        let a=evalCode(`${path}/assets.js`);
                              
                        if(a.linkCss){
                             cssLink= cssLink.concat(a.linkCss);
                        }
                        if(a.linkJs){
                             jsLink=jsLink.concat(a.linkJs);
                        }
                        if(a.localCss){
                              for(let link in a.localCss){
                                    cssLoader.push(link);
                                    for(let l of a.localCss[link]){
                                          appendFile(`dist/assets/css/${link}.css`,`${path}/assets/${l}`);
                                    }
                              }
                        }
                        if(a.localJs){
                              for (let link in a.localJs){
                                    jsLoader.push(link);
                                    for(let l of a.localJs[link]){
                                          appendFile(`dist/assets/js/${link}.js`,`${path}/assets/${l}`);
                                    }
                              }
                        }

                  }
                  
            }
      

            // 页面的结束,开始替换css和js
           let indexHtml= fs.readFileSync(`dist/${item}/index.html`).toString();
           console.log(cssLink,cssLoader,jsLink,jsLoader);
           let css=createLink(unique(cssLink),'css',true) + createLink(unique(cssLoader),'css',false);
           let js=createLink(unique(jsLink),'js',true) + createLink(unique(jsLoader),'js',false);

           var k= indexHtml.replace('{{link}}',css).replace('{{script}}',js);//
           fs.writeFileSync(`dist/${item}/index.html`,k);
      }
});


function evalCode(path){//解析文件里面的代码
      let chunk = fs.readFileSync(path, 'utf-8');
      let data = eval(chunk);
      return data;
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
