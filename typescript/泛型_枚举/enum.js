var Direction;
(function (Direction) {
    Direction["Up"] = "a";
    Direction["Down"] = "b";
    Direction["Left"] = "c";
    Direction["Right"] = "d";
})(Direction || (Direction = {}));
console.log(Direction);
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
console.log(E1);
console.log(E2);
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
console.log(f(E));
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
