const express = require('express');

const app = express();
//route create karana 
/*app.get('/', (req, res) => {
  res.send('Hello World')
})*/
//routing
/*app.get('/about', (req, res)=>{
    res.send('About Page')
})
app.listen(3000)*/
//middleware
// request app.use(function(req,res,next))
//next tr request send it forward
app.use(function(req,res,next){
    console.log('middleware called');
    next();
})