var arr = [
    {
        a:0,
        b:null,
        c:null
    },{
        a:1,
        b:0,
        c:undefined
    }
];

function count(arr){
    let tmp = {
        sumA:{
            sum:0,
            WithoutNumber:true
        },
        sumB:{
            sum:0,
            WithoutNumber:true
        },
        sumC:{
            sum:0,
            WithoutNumber:true
        }
    }
    arr.forEach(element => {
        if(typeof element.a === "number"){
            tmp.sumA.sum += element.a;
            tmp.sumA.WithoutNumber = false;
        }
        if(typeof element.b === "number"){
            tmp.sumB.sum += element.b;
            tmp.sumB.WithoutNumber = false;
        }
        if(typeof element.c === "number"){
            tmp.sumC.sum += element.c;
            tmp.sumC.WithoutNumber = false;
        }
    });

    let ret = {
        sumA:tmp.sumA.WithoutNumber?null:tmp.sumA.sum,
        sumB:tmp.sumB.WithoutNumber?null:tmp.sumB.sum,
        sumC:tmp.sumC.WithoutNumber?null:tmp.sumC.sum,
    }

    return ret;
}