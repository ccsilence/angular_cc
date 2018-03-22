var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {templateUrl: '/views/tpl/welcome.html', controller: 'WelcomeCtrl'});
    $routeProvider.when('/login',{templateUrl:'/views/tpl/login.html',controller:'LoginCtrl'});
    $routeProvider.when('/register',{templateUrl:'/views/tpl/register.html',controller:'RegisterCtrl'});
    $routeProvider.when('/logout', {templateUrl:'/views/tpl/logout.html', controller:'LogoutCtrl'});
    $routeProvider.otherwise({redirectTo:'/'});
    /*
      该处用到$localtion服务，
      支持HTML5模式(/)和Hashbang模式（#/）
    */
    $locationProvider.html5Mode(true);
}]);