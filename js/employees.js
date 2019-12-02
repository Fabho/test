// Register `phoneList` component, along with its associated controller and template
angular.module('employees', []);

angular.
  module('employees').
  component('employees', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: './tmpl/employees/employees.html'
  });