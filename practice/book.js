var book=(function(){
  var bookNum=0;
  function checkBook(name){

  }

  function _book(newId,newName,newPrice){
  		var name,price;
  		function checkID(id){//外部无法访问

  		}
  		this.getName=function(){return name}
  		this.getPrice=function(){return price}
  		this.setName=function(newName){name=newName;}
  		this.setPrice=function(newPrice){price=newPrice;}

  		this.id=newId;
  		this.copy=function(){
  			//
  		}
  		bookNum++;
  		if(bookNum>100){
  			throw new Error('我们只卖100本');
  		}
  			this.setName(newName);
  			this.setPrice(newPrice);
		}

  		_book.prototype ={
  			isJSBook:false,
  			display:function(){

  			}
  		};
  		return _book;
})();

var book1=new book(1,'js高级程序设计',22);
book1.getName();


var Book=function(title,time,type){
	if(this instanceof Book){
            this.title=title;
            this.time=time;
            this.type=type;
	}else{
		return new Book(title,time,type);
	}
}

Book('js高级程序设计','2015-09-09','js');



function SuperClass(name){
	this.name=name;
	this.books=['html','css','js'];
}

SuperClass.prototype.getName=function(){
	console.log(this.name);
}


function SubClass(name,time){
    SuperClass.call(this,name);
    this.time=time;
}

SubClass.protoype =new SuperClass();

SubClass.prototype.getTime=function(){
	console.log(this.time);
}

jQuery.get('https://reolink.com/wp-json/reo/products/42').then(function(data){
  console.log(data);
},function(err){
  console.log(err);
})