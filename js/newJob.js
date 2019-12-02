// Register `phoneList` component, along with its associated controller and template
angular.module('newJob', []);

angular.
  module('newJob').
  component('newJob', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: './tmpl/newJob/newJob.html'
  });