var Product = require('../models/ProductModel.js');


module.exports = {


  read: function(req, res){
    Product.find({}, function(error, result){
      if(error){
        res.send(error);
      } else {
        //changes null and undefiend into valid json
        res.json(result);
        console.log(result)
      }
    });
  },
  findName: function(req, res){
    Product.findOne({title: req.params.id}, function(error, results){
      if(error){
        res.send(error);
      } else {
        //changes null and undefiend into valid json
        res.send(results);
        console.log(results)
      }
    })
  },

  show: function(req, res){
    Product.findById(req.params.id, function(error, results){
      if(error){
        res.send(error);
      } else {
        //changes null and undefiend into valid json
        res.json(result);
        console.log(result)
      }

    })
    },

  update: function(req, res){
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(error, result){
      if(error){
        res.send(error);
      } else {

        res.send(result);
        console.log(result)
      }
    });

  },

  create: function(req, res){
    Product.create(req.body, function(error, result){
      if(error){
        res.send(error);
      } else {
        //changes null and undefiend into valid json
        res.json(result);
        console.log(result)
      }
    });
  },

  remove: function(req, res){
    Product.findByIdAndRemove({_id: req.params.id}, function(error, result){
      if(error){
        res.send(error);
      } else {
        //changes null and undefiend into valid json
        res.json(result);
        console.log(result)
      }

    });

  }

}
