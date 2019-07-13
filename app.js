var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.sendfile('index.html');
})
app.get('/registration',function(req, res){
    res.sendfile('registration.html');
})
app.get('/about',function(req, res){
    res.sendfile('about.html');
})
app.listen(3001,()=>
{
    console.log("server is working");
})