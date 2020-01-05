const { spawn } = require('child_process');
// const ls = spawn('ls',['-lh','/usr']);
// ls.stdout.on('data',(data)=>{
//   console.log(`stdout:${data}`);
// })

// ls.stderr.on('data',(data)=>{
//   console.error(`stderr:${data}`);
// });

// ls.on('close',(code)=>{
//   console.log(`exit code:${code}`);
// });

const ls2 = spawn('ls');
ls2.stdout.on('data',(data)=>{
  console.log(`stdout2:${data}`)
})

const 