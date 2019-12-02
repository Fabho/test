// Register `phoneList` component, along with its associated controller and template
angular.module('home', []);

angular.
  module('home').
  component('home', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    templateUrl: './tmpl/home/home.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });