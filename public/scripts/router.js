angular.module('BookTracker', ['ui.router'])
    .config(BookRouter);

function BookRouter($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('index', {
            url: '/home',
            templateUrl: '/partials/home.html',
        })
        .state('about', {
            url: '/about',
            templateUrl: '/partials/about.html'
        })
        .state('library', {
            url: '/library',
            templateUrl: '/partials/library.html',
            controller: 'BookController as book'
        })
        .state('books', {
            url: '/books',
            templateUrl: '/partials/bookshelves.html',
            controller: 'BookController as book',
        });
}
