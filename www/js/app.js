// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('SelfiePoint', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

  $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'templates/home.html',
      controller:"HomeController"
    })
    /*.state('find',{
      url:'/find',
      templateUrl:'templates/findOption.html',
      controller:'FindOptionController'
    })
    .state('internshiplist',{
      url:'/internshiplist',
      templateUrl:'templates/internshiplist.html',
      controller:'InternshiplistController'
    })
*/
    $urlRouterProvider.otherwise("/home");
}])

.controller('NavCtrl', ['$scope','$ionicSideMenuDelegate',function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.exitapp = function () {  
    //document.addEventListener("backbutton",onBackKeyDown,false);
    //function onBackKeyDown(){
      //alert('fsd');
      //ionic.Platform.exitApp();
        navigator.notification.confirm(
          'Exit Internkatta ?'
        , function(button) {
              if (button == 2) {
                  navigator.app.exitApp();
              } 
          }
        , 'Exit'
        , 'No,Yes'
        );  
      //}
  };
}])

.controller('HomeController',['$scope','$location', '$anchorScroll','$timeout','$ionicModal' ,function($scope,$location, $anchorScroll,$timeout,$ionicModal){
    
    $scope.TodaySelfie =   [       
                            {
                                "ID":"1",
                                "Path":"img/ionic.png"  
                            },
                            {
                               "ID":"2",
                                "Path":"img/ionic.png"  
                            },
                            {
                                "ID":"3",
                                "Path":"img/ionic.png"   
                            },        
                            {
                                "ID":"4",
                                "Path":"img/ionic.png"   
                            },       
                            {
                                "ID":"5",
                                "Path":"img/ionic.png"  
                            },
                            {
                                "ID":"6",
                                "Path":"img/ionic.png"  
                            }
                        ];
    
    
    $ionicModal.fromTemplateUrl('uploadModal.html', function(modal){
        $scope.UploadModal = modal;
    },{
        scope: $scope,
        animation: 'slide-in-up'
    });

      $scope.NewUpload = function(){
        $scope.UploadModal.show();
      }
    
      $scope.closeNewUpload = function(){
        $scope.UploadModal.hide();
      }
    
}])