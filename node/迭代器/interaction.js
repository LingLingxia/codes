



function double(num,callback){
    var _callback=function(){
         return function(){
             callback.call(this,num*2);
             console.log(num*2);
         }
    }
    
    setTimeout(_callback(), 100);
}


function  cut(num,callback){
    var _callback=function(){
        return function(){
            callback.call(this,num-2);
            console.log(num-2);
        }
   }
   
   setTimeout(_callback(), 100);
}

function  add(num,callback){
    var _callback=function(){
        return function(){
            callback.call(this,num+10);
            console.log(num+10);
        }
   }
   
   setTimeout(_callback(), 100);
}



var m1=chunk(double);

var m2=chunk(cut);
var m3=chunk(add);

//起始2    2*2+10-2=12; 返回12;
function *gen(a){
    var b=yield m1(a);

    var c= yield m2(b);

    var d= yield m3(c);

      console.log(d);
}

function chunk(fn){
    var self=this;
    return function(){
       var arg=Array.prototype.slice.call(arguments,0) ;
        return function(callback){
              arg.push(callback);
              fn.apply(self,arg);
        }
    }
}



var it=gen(2);
run();
function run( data ){
   let k= it.next(data);
   
   if(k.done){
      return k.value;
   }else{
      k.value((d)=>{
            run (d);
      })
   }
     
}
