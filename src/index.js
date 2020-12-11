const express = require('express');
const app = express();
const path = require('path');
//settings
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
// routes

var routes = require("./routes/index.js"); 
app.use('/', routes);
app.listen(3000);
console.log('Server on port 3000');