var http=require('http');

var server=http.createServer(function(req,res){
	res.writehead(200,{'content-type':'text/html'});
	res.end('hello');
})

//dependercies
var express=require ('express');
var mongoose= require ('mongoose');
var bodyParser = require ('body-parser');

//mongodb
mongoose.connect(' mongodb://alexmuturi@gmail.com:dream20y@ds047720.mongolab.com:47720/rest');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//routes
app.use('/api',require('./routes/api'))


//start server
var port=Number(process.env.PORT || 3000);

app.listen(port);
console.log('we running on port ' + port);