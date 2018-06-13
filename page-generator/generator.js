const fs = require('fs');

fs.mkdirSync('dist');

fs.mkdirSync('dist/assets');
 fs.mkdirSync('dist/assets/css');
 fs.mkdirSync('dist/assets/js');
var filess = fs.readdirSync('page');

filess.forEach((item, index) => {

      var files = fs.readdirSync(`page/${item}`);

      if (files.indexOf('page.js') > 0) {

            fs.mkdirSync(`dist/${item}`);

           let m={};

            m.cssLoader=[],m.jsLoader=[],m.cssLink=[],m.jsLink=[];

            let data=evalCode(`page/${item}/page.js`);

            var { components ,pageAssets } = data;
            if(pageAssets){
                  mergeAsserts(m,pageAssets,`page/${item}`);
            }
            for (var com in components) {

                  let [mode, dir] = components[com].split('/');

                  let path = mode == 'global' ? `components/${dir}` : `page/${item}/components/${dir}`;

                  let contet = fs.readFileSync(`${path}/template.html`);;

                  fs.appendFileSync(`dist/${item}/index.html`, contet);

                  //拼接template
                  let componentsDir=fs.readdirSync(path);

                  if(componentsDir.indexOf('assets.js')>0){
                        
                        let a=evalCode(`${path}/assets.js`);
                        mergeAsserts(m,a,path);
                  }
            }
           let indexHtml= fs.readFileSync(`dist/${item}/index.html`).toString();

           let css=createLink(unique(m.cssLink),'css',true) + createLink(unique(m.cssLoader),'css',false);
           let js=createLink(unique(m.jsLink),'js',true) + createLink(unique(m.jsLoader),'js',false);

           var k= indexHtml.replace('{{link}}',css).replace('{{script}}',js);//
           fs.writeFileSync(`dist/${item}/index.html`,k);
      }
});


function evalCode(path){
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
