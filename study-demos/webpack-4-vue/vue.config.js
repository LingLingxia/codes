const path = require('path');
const FileListPlugin = require('./src/plugin/FileListPlugin');
const Allhooks = require('./src/plugin/all-hooks');
module.exports = {
  configureWebpack: {
    plugins: [
      new FileListPlugin(),
      new Allhooks()
    ]
  }
}