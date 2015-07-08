var http=require('http');

var server=http.createServer(function(req,res){
	res.writehead(200,{'content-type':'text/html'});
	res.end('hello')
})

//dependercies
var express=require ('express');
var mongoose= require ('mongoose');
var bodyParser = require ('body-parser');

//mongodb
mongoose.connect('mongodb://localhost/rest_test');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//routes
app.use('/api',require('./routes/api'))


//start server
var port=Number(process.env.PORT || 3000);

app.listen(port);
console.log('we running on port 3000');