var app = angular.module('eCommerce').service('userService', function($http){

  this.addUser = function(username, password){
    return $http({
      url: 'http://localhost:8811/users',
      method: "POST",
      data: {
        name: username,
        password: password
      }
    });
  };

	this.getUser = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:8811/users'
		});
	};

  this.addToCart = function(productTitle, productId, user, price){
		return $http({
			method: 'POST',
			url: 'http://localhost:8811/users/' + user,
			data: {
				title: productTitle,
        products: productId,
        numberOfProducts: 1,
        price: price
			}
		})
	};

  this.getProductsFromUser = function(user){
    return $http({
      method: "GET",
      url: 'http://localhost:8811/users/' + user
    });
  };

  this.removeCartItem = function(productId, userId) {
    return $http({
      method: "PUT",
      url: 'http://localhost:8811/users/remove/'+ userId,
      data: {
        removeItem: productId
      }
    });
  };

  this.editUserCart = function(targetUserId, updatedUserCart){
    return $http({
      method: 'PUT',
      url: 'http://localhost:8811/users/' +targetUserId,
      data: {
        cart: updatedUserCart
      }
    });
  };

});
