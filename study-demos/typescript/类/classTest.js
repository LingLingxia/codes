//源文件在classTestTwo.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        // extendStatics = Object.setPrototypeOf ||

        //     ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||

        //     function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        // return extendStatics(d, b);

        if(Object.setPrototypeOf){
            extendStatics = Object.setPrototypeOf
        }else if({ __proto__: [] } instanceof Array){
            extendStatics = function (d, b) { d.__proto__ = b; }
        }else{
            //复制非原型链上的属性
            extendStatics = function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        }
        return extendStatics(d, b);
    }
    return function (d, b) {
        //这一段好绕啊,一开始的时候extendStatics等于上面的那个匿名函数,当执行了一次之后,
        //它就等于了Object.setPrototypeOf这个函数了.并且在返回的时候用Object.setPrototypeOf设置了d和b的原型关系
        console.log(extendStatics);
        console.log('888',extendStatics == Object.setPrototypeOf);
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//普通的继承和私有属性
var Animal = /** @class */ (function () {
    function Animal(meter) {
        this.meter = meter;
    }
    Animal.prototype.move = function () {
        console.log("i can move " + this.meter + " M");
    };
    return Animal;
}());
var animal = new Animal(3);
//animal.move();
var Snak = /** @class */ (function (_super) {
    __extends(Snak, _super);
    function Snak(meter, name, favorite) {
        var _this = _super.call(this, meter) || this;
        _this.meter = meter;
        _this.name = name;
        _this.favorite = favorite;
        return _this;
    }
    Snak.prototype.move = function () {
        console.log("i can move " + this.meter + " M , my name is " + this.name + "\n         My favorite Object is " + this.favorite);
    };
    return Snak;
}(Animal));
var snak = new Snak('k', 'long snak', 'math');
//snak.move();
//console.log(snak.meter);
// console.log(snak.name);
// console.log(snak.favorite);
//get 和set
// var Employee = /** @class */ (function () {
//     function Employee() {
//     }
//     Object.defineProperty(Employee.prototype, "fullName", {
//         get: function () {
//             return this._fullName + '888';
//         },
//         set: function (name) {
//             this._fullName = name;
//         },
//         enumerable: true,
//         configurable: true
//     });
//     return Employee;
// }());
// var employee = new Employee();
// employee.fullName = 'Jony';
// //console.log(employee.fullName);
// //抽象类
// var Human = /** @class */ (function () {
//     function Human() {
//     }
//     Human.prototype.talk = function () {
//     };
//     Human.age = 7;
//     return Human;
// }());
// var Female = /** @class */ (function (_super) {
//     __extends(Female, _super);
//     function Female(name) {
//         var _this = _super.call(this) || this;
//         _this.name = name;
//         return _this;
//     }
//     return Female;
// }(Human));
// var female = new Female('llx');
// female.talk();
// //console.log(Female.age);
// console.log(Human.isPrototypeOf(Female));
console.log(Animal.isPrototypeOf(Snak));

