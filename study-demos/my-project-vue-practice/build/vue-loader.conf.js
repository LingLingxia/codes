'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
console.log(isProduction);
// const sourceMapEnabled = isProduction
//   ? config.build.productionSourceMap
//   : config.dev.cssSourceMap
const sourceMapEnabled = true;
module.exports = {
  loaders: utils.cssLoaders({
   sourceMap: sourceMapEnabled,
    //extract: isProduction
  }),
  sourceMap:true,
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
