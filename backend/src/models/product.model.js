const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
	name : {type:String},
	description : {type:String},
	price : {type:String},
	quantity : {type:String},
	image : {type:String},
	status : {type:Boolean}
})
module.exports = mongoose.model('Product', Product);