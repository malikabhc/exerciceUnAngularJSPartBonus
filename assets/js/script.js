var form = angular.module('validForm', []);
form.controller('validCtrl',['$scope',  function($scope){
  $scope.regex = '(.)?@(.)?';
  $scope.resultTestMail = false;
  $scope.testMail = function(){
    $scope.resultTestMail = $scope.form.email.$valid;
  }
}]);
