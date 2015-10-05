var mongoose = require('mongoose');


module.exports = {


  read: function(req, res){
    Cart.find({}, function(error, result){
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
    Cart.findOne({title: req.params.id}, function(error, results){
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
    Cart.findById(req.params.id, function(error, results){
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
    Cart.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(error, result){
      if(error){
        res.send(error);
      } else {

        res.send(result);
        console.log(result)
      }
    });

  },

  create: function(req, res){
    Cart.create(req.params.user_id, req.body, function(error, result){
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
    Cart.findByIdAndRemove({_id: req.params.id}, function(error, result){
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
