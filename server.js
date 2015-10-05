var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8811;
var mongoose = require('mongoose');

var ProductsController = require('./controllers/ProductsController');
var UserController = require('./controllers/UserController');
var OrderController = require('./controllers/OrderController');
var CartController = require('./controllers/CartController');

var mongooseURI = 'mongodb://localhost/8811/productStore';
mongoose.connect(mongooseURI, function(err){
  if(err){ throw err;}
  });

mongoose.set('debug', true);
mongoose.connection.once('open', function(){
  console.log('mongoose connected to ' + mongooseURI);
  })

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.use(cors());


app.get('/products', ProductsController.read);

app.get('/products/:id', ProductsController.findName);

app.put('/products/:id', ProductsController.update);

app.delete('/products/:id', ProductsController.remove);

app.post('/products', ProductsController.create);

app.post('/users', UserController.create);

app.get('/users', UserController.getRecent);

app.post('/users/:id', UserController.addItemToCart);

app.put('/users/:id', UserController.update);

app.put('/users/remove/:id', UserController.remove);



 app.listen(port, function(){
   console.log('Listening on port: ' + port);
 });
