var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var expressValidator = require('express-validator');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  res.locals.errors = null;
  next();
});

app.use(expressValidator());

app.get('/', function(req,res) {
	res.render('index');
});



app.listen(8000, function(){
  console.log('Server started on port 8000...');
})
