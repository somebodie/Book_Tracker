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
              console.log(response);
            });
    }

    function login(userPass) {
        $http.post('/sessions/login', userPass)
            .then(function(response) {
                $scope.$emit('userLoggedIn', response.data.data);
                $rootScope.$emit('fetchData', response.data.data);
                $state.go('books'
                );
            });
    }

    function logout() {
        $http.delete('/sessions')
            .then(function(response) {
                $scope.$emit('userLoggedOut');
            });
    }

    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Get the modal
    var modal = document.getElementById('id02');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
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
    self.lit = [];

    function newBook() {

        title = self.title;
        author = self.author;
        genre = self.genre;
        read = self.read;
        checked = self.checked;
        if (checked) {
            give = self.give;
            // console.log(give);
        } else {
          give = 'Keeping'
        }
        // console.log('THIS IS A NEW BOOK ROUTE!');
        // console.log(title);
        // console.log(author);
        // console.log(genre);
        // console.log(read);
        // console.log(checked);
      self.lit.push({
            title: title, author: author, genre: genre, read: read, giveAway: checked, away: give
        })
        console.log(self.lit);
    }

    function showBooks() {
      console.log('Showing books!');
      }

    function saveBooks() {
      console.log('Saving books!');

    }

    function updatedBooks() {
      console.log('Update Book');
    }

    function deleteBooks() {
      console.log('Delete Book');
    }

    self.newBook = newBook;
    self.showBooks = showBooks;
    self.saveBooks = saveBooks;
}
