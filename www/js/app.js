angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
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
    controller: 'MenuController'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
		controller: "HomeController"
      }
    }
  })

  .state('app.bussola', {
    url: "/bussola",
    views: {
      'menuContent': {
        templateUrl: "templates/bussola.html",
		controller: "BussolaController"
      }
    }
  })
  
  .state('app.notificacoes', {
    url: "/notificacoes",
    views: {
      'menuContent': {
        templateUrl: "templates/notificacoes.html",
		controller: "NotificacoesController"
      }
    }
  })
  
  .state('app.camera', {
    url: "/camera",
    views: {
      'menuContent': {
        templateUrl: "templates/camera.html",
		controller: "CameraController"
      }
    }
  })  
  $urlRouterProvider.otherwise('/app/home');
});
