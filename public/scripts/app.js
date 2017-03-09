// All controllers are here.
angular.module('BookTracker')
    .controller('HomeController', HomeController)
    .controller('AuthController', AuthController)
    .controller('BookController', BookController)

//****************************
//1. THIS IS THE HOME CONTROLLER
//****************************
function HomeController($scope, $http) {
    var self = this;

    $scope.$on('userLoggedIn', function(event, data) {
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
                $state.go('index', {
                    reload: true
                });
            });
    }

    function logout() {
        $http.delete('/sessions')
            .then(function(response) {
                $scope.$emit('userLoggedOut');
                $state.go('index', {
                    reload: true
                });
            });
    }

    self.signup = signup;
    self.login = login;
    self.logout = logout;
}
// https://github.com/ga-students/wdi-remote-matey/blob/abb1fb859e778f542595f4715f6a1385fee98a74/unit_03/w10d02/homework/bucket_list_starter/public/scripts/router.js
//****************************
//3. THIS IS THE BOOK CONTROLLER
//****************************
function BookController($scope, $http, $state, $stateParams, $rootScope) {

    var self = this;

    function newBook() {
      title = self.title;
      author = self.author;
      genre = self.genre;
      read = self.read;
      checked = self.checked;
      console.log('THIS IS A NEW BOOK ROUTE!');
      console.log(title);
      console.log(author);
      console.log(genre);
      console.log(read);
      console.log(checked);
      if (checked) {
          give = self.give;
          console.log(give);
        }
      
    }

    self.newBook = newBook;
}
