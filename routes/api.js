

var express= require ('express');
var router = express.Router();



var product = require('../models/products');
product.methods(['get','post','delete','put']);
product.register(router,'/products');


router.get('/products' ,function (req,res){ 
res.send('api is working ');
})


module.exports=router