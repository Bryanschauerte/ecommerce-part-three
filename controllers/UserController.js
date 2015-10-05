var User = require('../models/userModel');

module.exports = {

//use this to put the item in 'addcartitem'user.find(paramidfunc err/ user.cart$push(req.body)
  addItemToCart: function(req, res){
    User.findById(req.params.id, function(error, user){
      if(error){
        res.send(error)
      }else {
        user.cart.push(req.body);
        user.save(
          function(error, success){
          if(error){ console.log('failed to add product');
        }else{
          console.log(success);
        }
      });
      }})
  },

  create: function(req, res){
    User.create(req.body, function(error, result){
      if(error){
        res.send(error);
      } else {
        res.json(result);
      }
    });
  },

  getRecent: function(req, res){
    User.find( {},function(error, result){
      if(error){
        res.send(error);
      } else {
        res.json(result);
      }
    })
},

update: function(req, res){
  User.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(error, result){
    if(error){
      res.send(error);
    } else {

      res.send(result);
      console.log(result)
    }
  });

},

  remove: function(req, res){
    User.findById(req.params.id, function(err, user) {
      console.log(req.body.removeItem);
      user.cart.id(req.body.removeItem).remove();
      user.save(function(error, data){
        res.send(data);
      });
    });
  }

}
