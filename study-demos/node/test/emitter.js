const eventEmitter= require('events');

var emitter=new eventEmitter();

emitter.on('yes',()=>{
    console.log('yes');
});

emitter.emit('yes');