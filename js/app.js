var app = angular.module('app', [
  'ngRoute',
  'home',
  'employees',
  'jobs',
  'newJob'
]);

app.controller('MainController', function PhoneListController($scope) {
    $scope.x="test"
  });