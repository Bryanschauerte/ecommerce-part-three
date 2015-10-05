var mongoose = require('mongoose');
var cartSchema = require('./cartSchema');

var userSchema = new mongoose.Schema({
  name: {type: String},
  password: {type: String},
  cart: [cartSchema]

});

module.exports = mongoose.model('User', userSchema);
//model makes new collection
//exports=schema is the rules
