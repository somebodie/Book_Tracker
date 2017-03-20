// All controllers are here.
angular.module('BookTracker')
    .controller('BookController', BookController)
//****************************
// THIS IS THE BOOK CONTROLLER
//****************************
function BookController($scope, $http, $state, $stateParams, $rootScope) {

    var self = this;
    self.newBook = {};

    function showBooks() {
        console.log('Showing books!');
        $http.get('/books').then(function(response) {
            console.log(response);
            self.allBooks = response.data;
            console.log(self.allBooks);
        })
    }

    function saveBook() {
        console.log('Saving books!');
        $http.post('/books', self.newBook)
            .then(function(response) {
                console.log(response);
                console.log(self.newBook);
            })
    }

    function updateBook(book) {
        console.log('Update Book');
        $http.patch(`/books/${book.id}`)
            .then(function(response) {
                console.log(response);
            })
    }

    function deleteBook() {
        console.log('Delete Book');
        $http.delete(`/books/${book.id}`)
            .then(function(response) {
                console.log(response);
            })
        // showBooks();
    }

    showBooks();

    self.showBooks = showBooks;
    self.saveBook = saveBook;
    self.updateBook = updateBook;
    self.deleteBook = deleteBook;
}
