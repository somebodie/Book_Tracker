// ui-router here
// https://github.com/ga-students/wdi-remote-matey/blob/abb1fb859e778f542595f4715f6a1385fee98a74/unit_03/w10d02/homework/bucket_list_starter/public/scripts/router.js
angular.module('BookTracker', ['ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('index', {
    url: '/home',
    templateUrl: '/partials/home.html',
    // controller: 'HomeController as home'
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
    parent: 'library'
  })
}
