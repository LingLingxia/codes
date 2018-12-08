
//普通的继承和私有属性  为了防止不小心编译覆盖了classTest.js的值而改名
class Animal {
    constructor(protected meter:number){
    }
    move(){
        console.log(`i can move ${this.meter} M`);
    }
}

var animal = new Animal(3);
//animal.move();
class Snak extends Animal{
    constructor(protected meter,public name:string,readonly favorite:string){
        super(meter);
    }
    move(){
        console.log(`i can move ${this.meter} M , my name is ${this.name}
         My favorite Object is ${this.favorite}`);
    }
}
var snak = new Snak('k','long snak','math');
//snak.move();
//console.log(snak.meter);
// console.log(snak.name);
// console.log(snak.favorite);


//get 和set
class Employee {
    private _fullName:string;
    get fullName(){
        return this._fullName + '888';
    }
    set fullName(name){
        this._fullName = name;
    }
}
var employee = new Employee();
employee.fullName = 'Jony';
//console.log(employee.fullName);

//抽象类
class Human {
    static readonly age = 7;
    protected name:string;
     talk():void{

    }
}

class Female extends Human{
    constructor(name){
        super();
        this.name = name;
    }
}

var female = new Female('llx');
female.talk();
console.log(Female.age);


