// All 3 controllers (Home, Auth, Books) are here.
angular.module('BookTracker')
  .controller('HomeController', HomeController)
  .controller('AuthController', AuthController)
  .controller('BookController', BookController)

  //****************************
  //1. THIS IS THE HOME CONTROLLER
  //****************************
  function HomeController($scope, $http) {
    var self = this;

    $scope.$on('userLoggedIn', function(event, data){
      self.currentUser = data;
    });

    $scope.$on('userLoggedOut', function(event, data) {
      self.currentUser = null;
    });
  }

  //****************************
  //2. THIS IS THE AUTH CONTROLLER
  //****************************
  function AuthController($http, $state, $scope, $rootScope) {
    var self = this;

    function signup(userPass) {
      $http.post('/users', userPass)
        .then(function(response) {
          $state.go('login');
        });
    }

    function login(userPass) {
      $http.post('/sessions/login', userPass)
        .then(function(response) {
          $scope.$emit('userLoggedIn', response.data.data);
          $rootScope.$emit('fetchData', response.data.data);
          getAllUsers();
          $state.go('index', {reload: true});
      });
    }

    function logout() {
      $http.delete('/sessions')
        .then(function(response) {
          $scope.$emit('userLoggedOut');
            $state.go('index', {reload: true});
        });
    }

    this.signup = signup;
    this.login = login;
    this.logout = logout;
  }
// https://github.com/ga-students/wdi-remote-matey/blob/abb1fb859e778f542595f4715f6a1385fee98a74/unit_03/w10d02/homework/bucket_list_starter/public/scripts/router.js
  //****************************
  //3. THIS IS THE Book CONTROLLER
  //****************************
  function BookController($scope, $http, $state, $stateParams, $rootScope) {

    // code here
