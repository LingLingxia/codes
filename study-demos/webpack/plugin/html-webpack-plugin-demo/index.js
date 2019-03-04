const chunkSorter = require('./chunksorter.js');
const demoTHML = require('./demo.js');
const path = require('path');
class HtmlWebpackPlugin {
    apply (compiler) {
        const self = this;
        compiler.hooks.emit.tapAsync('HtmlWebpackPlugin',(compilation, callback)=>{
            const chunkOnlyConfig = {
                assets: false,
                cached: false,
                children: false,
                chunks: true,
                chunkModules: false,
                chunkOrigins: false,
                errorDetails: false,
                hash: false,
                modules: false,
                reasons: false,
                source: false,
                timings: false,
                version: false
              };

              let publicPath = self.getPublicPath(compilation);
        
            if (publicPath.length && publicPath.substr(-1, 1) !== '/') {
              publicPath += '/';
            }
              const allChunks = compilation.getStats().toJson(chunkOnlyConfig).chunks;
              let chunks = self.filterChunks(allChunks);
                  chunks = self.sortChunks(chunks,  compilation);
                  let script = '';
                for (let i = 0; i < chunks.length; i++) {
                  let chunk = chunks[i];
                  let chunkFiles = [].concat(chunk.files).map(chunkFile => publicPath + chunkFile);
                  const js = chunkFiles.find(chunkFile => /.js($|\?)/.test(chunkFile));
                  script = script + self.addScript(js);
                }
                let html = demoTHML.replace('[js-placeholder]',script);
               compilation.assets['index.html'] = {
                source: () => html,
                size: () => html.length
              };
              callback();
        })
    }

     sortChunks (chunks, compilation) {
        return chunkSorter(chunks, compilation);
      }

      filterChunks (chunks) {
        return chunks.filter(chunk => {
          const chunkName = chunk.names[0];
          // This chunk doesn't have a name. This script can't handled it.
          if (chunkName === undefined) {
            return false;
          }
          // Skip if the chunk should be lazy loaded
          if (typeof chunk.isInitial === 'function') {
            if (!chunk.isInitial()) {
              return false;
            }
          } else if (!chunk.initial) {
            return false;
          }
          // Add otherwise
          return true;
        });
      }
      
      getPublicPath(compilation){
        let publicPath = typeof compilation.options.output.publicPath !== 'undefined'
        ? compilation.mainTemplate.getPublicPath({hash: compilation.hash})
        : path.relative(path.resolve(compilation.options.output.path, path.dirname('index.html')), compilation.options.output.path)
          .split(path.sep).join('/');
  
      if (publicPath.length && publicPath.substr(-1, 1) !== '/') {
        publicPath += '/';
      }

      return publicPath;
      }
      addScript(id){
        return `<script src="${id}"></script>`;
      }
}

module.exports = HtmlWebpackPlugin;