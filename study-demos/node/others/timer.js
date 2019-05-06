const immediate = setImmediate(()=>{
    console.log('immediate');
});

const refreshTimeout = setTimeout(()=>{
    console.log('timeout');
},100);//加上0 之后   immediate   timeout


//refreshTimeout.refresh();  新增于版本10
// setTimeout(()=>{
// },2000);