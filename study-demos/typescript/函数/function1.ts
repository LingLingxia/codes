let myAdd:(x:number,y:number) =>void =
          function(a:number,b:number):void{a + b};

function buildName(firstName, lastName = "Smith") {
        return firstName + 5;
}
console.log(buildName(undefined,5));
        