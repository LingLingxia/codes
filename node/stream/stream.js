var stream =require('stream');
var fs=require('fs');
var st=fs.createWriteStream('index.txt')
//st.cork();
st.write('some');
//st.uncork();
st.write('data');