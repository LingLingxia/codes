const toposort = require('toposort');
module.exports = (chunks, compilation) => {
    const chunkGroups = compilation.chunkGroups;
    if (!chunks) {
      return chunks;
    }
  
    // We build a map (chunk-id -> chunk) for faster access during graph building.
    const nodeMap = {};
  
    chunks.forEach(chunk => {
      nodeMap[chunk.id] = chunk;
    });
  
    // Next, we add an edge for each parent relationship into the graph
    let edges = [];
  
    if (chunkGroups) {
      // Add an edge for each parent (parent -> child)
      edges = chunkGroups.reduce((result, chunkGroup) => result.concat(
        Array.from(chunkGroup.parentsIterable, parentGroup => [parentGroup, chunkGroup])
      ), []);
      const sortedGroups = toposort.array(chunkGroups, edges);
      // flatten chunkGroup into chunks
      const sortedChunks = sortedGroups
        .reduce((result, chunkGroup) => result.concat(chunkGroup.chunks), [])
        .map(chunk => // use the chunk from the list passed in, since it may be a filtered list
      nodeMap[chunk.id])
        .filter((chunk, index, self) => {
          // make sure exists (ie excluded chunks not in nodeMap)
          const exists = !!chunk;
          // make sure we have a unique list
          const unique = self.indexOf(chunk) === index;
          return exists && unique;
        });
      return sortedChunks;
    }

}