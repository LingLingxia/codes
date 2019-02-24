const path = require('path');
const FileListPlugin = require('./src/plugin/FileListPlugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new FileListPlugin()
    ]
  }
}