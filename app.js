var express = require('express');
var body_parser = require('body-parser');
var app = express();


var file_managment = require('./modules/file_managment');


app.use(express.static(__dirname+'/public'));
app.use(body_parser.urlencoded({ extended: false }));


app.use('/file', file_managment);

app.listen('80', '0.0.0.0', function () {
	console.log("Server Started");
});


