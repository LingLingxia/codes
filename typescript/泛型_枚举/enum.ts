enum Direction {
  Up = 'a',
  Down = 'b',
  Left = 'c',
  Right = 'd'
}



console.log(Direction);

enum E1 { X, Y, Z }

enum E2 {
    A = 1, B, C
}

console.log(E1);
console.log(E2);

enum E {
  X , Y, Z
}
function f(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
console.log(f(E));

//要注意的是 不会为字符串枚举成员生成反向映射。

const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

declare enum Enum {
  A = 1,
  B,
  C = 2
}