interface Empty<T> {
  data:T;
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // OK, because y matches structure of x
y = {
  data:'4'
};
  