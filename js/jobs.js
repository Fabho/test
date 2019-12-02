// Register `phoneList` component, along with its associated controller and template
angular.module('jobs', []);

angular.
  module('jobs').
  component('jobs', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: './tmpl/jobs/jobs.html'
  });