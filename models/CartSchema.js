var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
  numberOfProducts: {type: Number},
  products: {type: mongoose.Schema.Types.ObjectId, ref:'products', required: true},
  title: {type: String}

});

module.exports = cartSchema;
