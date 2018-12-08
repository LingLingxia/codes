interface Country {
    language:string;
    age:number;
}

abstract  class China implements Country{
    language:'chinese';
    age:2000;
   abstract  government();
}

interface InterfaceA{
    proA:string;
    proB:number;
}

interface InterfaceB{
    proC:string;
    proD:string;
}

abstract class ClassA implements InterfaceA,InterfaceB{
    proA;
    proB;
    proC;
    proD;
}

class ClassB extends ClassA{
    constructor(a,b,c,d){
        super();
        this.proA = a;
        this.proB = b;
        this.proC = c;
        this.proD = d;
    }
}

var classb = new ClassB('a',3,'c','d');
console.log(classb);