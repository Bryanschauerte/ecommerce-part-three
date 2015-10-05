var app = angular.module('eCommerce').service('productService', function($http){



this.getProducts = function(){
  return $http({
    method: 'GET',
    url: 'http://localhost:8811/products'
  });
}

this.addProduct = function(name, price, description){
  return $http({
    url: 'http://localhost:8811/products',
    method: "POST",
    data: {
      title: name,
      price: price,
      description: description
    }
  });
};
this.findName = function(name){
  return $http({
    method: 'GET',
    url: 'http://localhost:8811/products/' + name
  });
}

this.removeProduct = function(targetId) {

  return $http({
    method: "DELETE",
    url: 'http://localhost:8811/products/'+ targetId

  })
};

this.editProducts = function(targetId, name, price, description){

  return $http({
    method: 'PUT',
    url: 'http://localhost:8811/products/' +targetId.data._id,
    data: {
      title: name,
      price: price,
      description: description
    }
  });
}



})
