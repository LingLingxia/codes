export var b = 3;
export var a = 2;

var c = 4;
// export {c} 这个效果等同于  export var c = 4,  三个export 等同于  export {b,a,c}
export default{ c }


