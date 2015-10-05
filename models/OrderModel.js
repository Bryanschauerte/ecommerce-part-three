var mongoose = require('mongoose');
var orderSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  products: {type: mongoose.Schema.Types.ObjectId, ref: 'products'}

});

module.exports = mongoose.model('Order', orderSchema)
