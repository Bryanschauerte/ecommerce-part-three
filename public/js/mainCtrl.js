var app = angular.module('eCommerce').controller('mainCtrl', function($scope, productService, $mdToast, userService){
$scope.loggedIn = false;
$scope.showAddForm = false;
$scope.showAddFormButton = true;
$scope.showEditButton = true;
$scope.showEditForm = false;

$scope.productId = '';
$scope.searchName = ''
$scope.gotId = false;
$scope.getId = function(name){
  $scope.showEditButton = false;
  $scope.showEditForm = false;

  productService.findName(name).then(function(response){
    $scope.productId = response;
  });
}


$scope.editButton = function(){
  $scope.showEditButton = !$scope.showEditButton;
  $scope.showEditForm = !$scope.showEditForm;
};

$scope.removeProduct = function(targetId){
  console.log(targetId);
  productService.removeProduct(targetId).then(function(response){
    // console.log('this' +response.data+"removeddddd")

    $scope.targetToDelete = '';
  });
}


$scope.toggleAddForm = function(){
  $scope.showAddForm = !$scope.showAddForm;
  $scope.showAddFormButton = !$scope.showAddFormButton;
};

  $scope.getProducts = function(){
		productService.getProducts().then(function(response){
			$scope.products = response.data;

		})
	};

$scope.getProducts();

$scope.addProduct = function(name, price, description) {
  productService.addProduct(name, price, description).then(function(response){
    console.log(response.data)
    $scope.products = response.data;
    $scope.toggleAddForm();
  });

};


$scope.editAnItem = function(productId, name, price, description) {
  productService.editProducts(productId, name, price, description).then(function(response){
    $scope.products = response.data;
    $scope.showEditButton = true;
    $scope.showEditForm = false;
    $scope.productId ='';
  });
};

$scope.addUser = function(username, password){
  $scope.signInToast();
  userService.addUser(username, password).then(function(response){
    $scope.loggedIn = true;
    });
  $scope.user = userService.getUser().then(function(res){
    $scope.user = res.data[res.data.length-1];
  })
  $scope.adjustUserProps();
  };

$scope.itemAddToast = function() {
    $mdToast.show($mdToast.simple().content('Item Added!'));
  };
$scope.signInToast = function() {
      $mdToast.show($mdToast.simple().content('Welcome! Buy lots!'));
    };

$scope.addItemToCart = function(productTitle, productId, price) {
  $scope.itemAddToast();
  var userCart = $scope.user.cart;

  var inCartArray = false;
  //a check to see if object is in cart
  for(var i =0; i < $scope.user.cart.length; i++){
    if($scope.user.cart[i].title == productTitle){
      inCartArray = true;
      $scope.user.cart[i].numberOfProducts += 1;
      var updatedUser= $scope.user;
      userService.editUserCart($scope.user._id, updatedUser.cart).then(function(res){})
  }}
    if(inCartArray == false){
  userService.addToCart(productTitle, productId, $scope.user._id, price).then(function(results){
  })
}
$scope.adjustUserProps();
}
$scope.adjustUserProps = function(){
  $scope.user = userService.getUser().then(function(res){
  $scope.user = res.data[res.data.length-1];
})
  };

$scope.removeCartItem = function(productId, userId){

  userService.removeCartItem(productId, userId).then(function(res){
    $scope.adjustUserProps();
  })
}



//end of module
})
