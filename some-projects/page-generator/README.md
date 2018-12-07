# 使用说明
##本项目是静态页面打包项目，可以实现多语言。
###拆分组件
- components里面是公共的组件。page/**/components里面是某个页面私有的组件。
### 页面引用组件
- 所有的页面都在page文件夹下面,如果page/**/page.js文件存在，则根据page.js生成一个页面.
### 页面结构
*page/\*\*/文件夹 由以下文件/文件夹组成*
- page.js(必需)
```
module.exports={
    components:{//必需
       'header':'global/header',
       'homepage':'global/homepage',
       'footer':'global/footer',
    },
    pageAssets:{//本页面静态资源打包配置
        'localCss':{
            'homepage':['homepage.css']//本页面assets下面的 homepage.css打包到 dist/assets/css/homepage.css
        }
    },
    P:{//页面的公共配置数据，不同语言共用的数据
         age:25 //key:value
    }
}
```

- assets文件夹(如果page.js中定义了pageAssetes.localCss或者pageAssets.localJs则为必需)
  本页面私有的css和js文件
- lang文件夹(非必需)
里面存放语言包，每一种语言存放一个文件
en.js
`module.exports={
    place:'shenzhen',//key:value
};
`
zh.js
`   module.exports={
        place:'深圳',
    };
`

###组件结构

*components/\*\*/文件夹 由以下文件/文件夹组成*

- template.html(必需)
用于拼接的html代码片段
{P[]}数据占位符
{L[]}语言包占位符 
`
    <div class="show-page">
        this is content of my page
        {P[age]}  //将替换成数据文件中的age
        {L[name]}//将替换成语言包文件中的name
        {L[place]}
        {P[hometown]}
        {L[favorite]}
    </div>
`

- component.js
模板静态资源打包配置
`
module.exports={
    linkCss:['https://www.google.com/wp-content/common.css','https://www.baidu.com/wp-content/css/common.css'],//外链css
    linkJs:['https://code.jquery.com/jquery-latest.js'],//外链js
    localCss:{//本组件assets下面的'response.css','color.css','animate.css'打包到 dist/assets/css/common.css    ,
            //本组件assets下面的header.css打包到 dist/assets/css/header.css
        'common':['response.css','color.css','header.css'],
        'header':['header.css'],
    },
    localJs:{
        'common':['response.js','color.js','animate.js'],
        'header':['header.js'],
    }
}
`

- lang文件夹 (同page/lang)
- assets文件夹 (同page/assets)

###common.js
全局语言包和全局数据
`
module.exports={
    'lang':{
        'en':{
            'favorite':'programming',
            
        },
        'zh':{
            'favorite':'编程'
        }
    },
    'page':{
        'age':22,
        'hometown':'dongAn'
    }
}
`

### config.js
存放语言种类
*所有语言包相关的文件命名以及语言包的key值都必须是此文件规定的，如en.js ,zh.js,lang.en,lang.zh*
`
    module.exports = {
        lang:['en','zh']
    }
`

###生成文件说明
- 如果打包成功后生成 一个dist文件，根据语言生成文件夹，比如dist/en,dist/zh. css和js存放再dist/assets/css,dist/assets/js .
- 全局，页面，组件都有语言包文件和数据文件，优先级如下.  页面>组件>全局.如果三处都没有定义，则抛出一个错误，并且占位符不被替换.
- 打包的语言已页面的语言为准，如果页面A只有一个lang/en.js ,页面A引用了组件B,组件 B有lang/en.js,lang/zh.js, 那么最后生成的文件只有dist/en/A,没有dist/zh/A.
- 组件header和footer里面的`{{link}}` 和`{{script}}`分别是js和css的占位符，不可移除.
