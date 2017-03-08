// ui-router here
// https://github.com/ga-students/wdi-remote-matey/blob/abb1fb859e778f542595f4715f6a1385fee98a74/unit_03/w10d02/homework/bucket_list_starter/public/scripts/router.js
angular.module('BookTracker', ['ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/home',
    templateUrl: '/partials/home.html'
  })
  .state('library', {
    url: '/library',
    templateUrl: '/partials/library.html'
  })
  .state('bookshelves', {
    url: '/bookshelves',
    templateUrl: '/partials/bookshelves.html'
  })
}
