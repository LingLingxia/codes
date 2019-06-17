var a = 'name';

function geta(){
    console.log(a);
    let a = 'getaname';//这一句的存在使得作用域不会向上查找,因此报错  undefined
}

geta();