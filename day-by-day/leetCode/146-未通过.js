/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = capacity;
    this.count = 0;
    this.header = {};
    this.footer = null;
    this.map = new Map();
};

/** 
 * 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
      console.log(this.header,this.footer);
      let post = this.map.get(key);
      if(!post) return -1;
      if(this.header.next === this.footer) return post.val;
      if(post===this.footer){
            this.footer = post.prev;
            this.footer.next = null;
      }else{
        post.prev.next = post.next;
        post.next.prev = post.prev; 
      }
        //post放到头部
        post.next = this.header.next;
        if(this.header.next){
            this.header.next.prev = post;
        }
        this.header.next = post;
        post.prev = null;
        return post.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let item = this.map.get(key);
     if(item) {
         item.val = value;
         this.get(key);
         return ;
     }else{
         if(this.count === this.size){
           //  删除footer指向的节点
           this.map.delete(this.footer.key);
           if(this.header.next===this.footer){//最后一个节点
               this.footer = null;
           }else{
               this.footer = this.footer.prev;
               this.footer.next = null;
           }

           this.count --;
         }
         this.count++;
         let node = {
             prev:this.header,
             next:this.header.next,
             val:value,
             key:key
            }
            this.map.set(key,node);
            if(this.header.next){
               this.header.next.prev = node;
            }
           this.header.next = node;
           if(!this.footer){
               this.footer = node;
           }
     }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */