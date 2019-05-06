//node 版本不支持
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.once('log',()=>console.log('log once'));
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

logEnWrapper.listener();
emitter.emit('log');
emitter.emit('log');