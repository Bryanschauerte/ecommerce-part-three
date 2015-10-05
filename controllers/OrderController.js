var Order = require('../models/OrderModel');

module.exports = {


  read: function(req, res){
    Order.find({}, function(error, result){
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
    Order.findOne({title: req.params.id}, function(error, results){
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
    Order.findById(req.params.id, function(error, results){
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
    Order.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(error, result){
      if(error){
        res.send(error);
      } else {

        res.send(result);
        console.log(result)
      }
    });

  },

  create: function(req, res){
    Order.create(req.body, function(error, result){
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
    Order.findByIdAndRemove({_id: req.params.id}, function(error, result){
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
