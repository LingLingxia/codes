const util = require('util');
function fn() {
  return Promise.reject();
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  // When the Promise was rejected with `null` it is wrapped with an Error and
  // the original value is stored in `reason`.
  err && err.hasOwnProperty('reason') && err.reason === null;  // true
  console.log(err,err.reason);
});

//如果传入  null  reaseon就有值null
//如果传入可以转化为true布尔值的值，则 err就等于这个值