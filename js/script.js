var myApp = angular.module('myModule', ['ngSanitize','ngAnimate','angular-loading-bar','toastr','ui.bootstrap']);
myApp.controller("myCTRL", mainIndex);

myApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.includeBar = true;
  cfpLoadingBarProvider.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';
  }])


function mainIndex($scope,$http,$q,$timeout,cfpLoadingBar,toastr){
  vm = $scope;
  vm.test = "this is template";


$scope.testPOST = function(){
    var url = 'www.google.com';
    var data = $scope.sessionCookie;
    var config = {
      transformRequest: angular.identity,
      transformResponse: angular.identity,
      headers : {
          'Content-Type': 'application/json'
      }
    }

   $http.post(url, data, config).then(function (response) {
    }, function (response) {
        $scope.error=JSON.parse(response.data);
    }); 

}

$scope.testToast = function(){
  var toast = toastr.error('You are not allowed to do this!');
  // after doing something...
  toastr.refreshTimer(toast, 5000);
  bootbox.alert("hello world");
}


}