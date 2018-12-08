var a="we are happy";
while(~a.indexOf(' ')){//不等于-1
    a=a.replace(' ',"%20");
}

console.log(a);