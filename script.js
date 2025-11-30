
//node.js
// how to use module
const fs = require('fs');
/*fs.writeFile('hello.txt','hello world',function(err){
    if(err)console.console.error(err);
    
    else console.log('file created');
});*/
/*fs.copyFile('hello.txt','hello1.txt',function(err){
    if(err)console.error(err);
    else console.log('file copied');
});*/
fs.unlink('hello1.txt',function(err){
    if(err)console.error(err);
    
});