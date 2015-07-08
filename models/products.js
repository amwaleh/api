var restful = require ('node-restful');
var mongoose = restful.mongoose;


var productSchema= new mongoose.Schema({
	Meal: String,
	description: String,
	price: Number
});


module.exports = restful.model('products',productSchema);