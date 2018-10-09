// class A {
//     static hello() {
//       console.log('hello world');
//     }
//   }
  
//   class B extends A {
//   }
  
//   B.hello()  // hello world

//   console.log(B);
//   console.log(B.prototype instanceof A);


class A {
    p() {
      return 2;
    }
  }
  
  class B extends A {
    constructor() {
      super();
      console.log(super.p()); // 2
    }
  }
  
  let b = new B();