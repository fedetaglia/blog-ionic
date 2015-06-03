// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('blog', ['ionic', 'ngResource'])

// .constant("ApiUrl", "http://localhost:3000/api")
.constant("ApiUrl", "http://blog-rails-api.herokuapp.com/api")

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.posts', {
    url: '/posts',
    views: {
      'menuContent': {
        templateUrl: 'templates/posts/index.html',
        controller: 'PostsCtrl'
      }
    }
  })

  .state('app.post', {
    url: '/posts/:postId',
    views: {
      'menuContent': {
        templateUrl: 'templates/posts/show.html',
        controller: 'PostCtrl'
      }
    }
  })

  .state('app.', {
    url: '/cacca',
    views: {
      'menuContent': {
        templateUrl: 'templates/posts/new.html',
        controller: 'NewPostCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
