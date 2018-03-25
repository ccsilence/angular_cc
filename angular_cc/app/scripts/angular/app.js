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
}])
.controller('RegisterCtrl', function($scope,$location,$http) {
    $scope.user = {
        email:'',
        password:'',
        confirmpassword:''
    };

    $scope.registerUser = function () {
        $http({
            method:'POST',
            url:"/register",
            data:$scope.user
        }).success(function(data) {
            var newUser = new UsersModel({
                email: $scope.user.email,
                password: $scope.user.password,
                confirmpassword: $scope.user.confirmpassword
            });
            newUser.save(function(err, data){
                if(err){ return console.log(err) }
                console.log("添加用户成功");
                // res.redirect('/');
            })
            // $location.path("/");
        });
    }
});