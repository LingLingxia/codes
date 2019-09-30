当我们希望对静态页面和vuerouter一起使用的时候，如果不进行配置，静态页面会被路由重写到首页，并不会向后台发起请求，拿到代理服务器的静态页面。
此时，需要对devServer进行配置
```
    proxy: {

      [process.env.VUE_APP_BASE_API]: {
        target: 'http:xxxxxxx',
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: '',
          '^/api/': '/'
        }
      }
    },
```
重点是
```
 '^/api/': '/'
```

此时所有静态页面的路径都1⃣️api开头，并且不会影响vue-router的路由配置。