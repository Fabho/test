angular.
  module('app').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<home></home>'
        }).
        when('/employees', {
            template: '<employees></employees>'
        }).
        when('/jobs', {
            template: '<jobs></jobs>'
        }).
        when('/newJob', {
            template: '<new-job></new-job>'
        }).
        /*when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).*/
        otherwise('/home');
    }
  ]);