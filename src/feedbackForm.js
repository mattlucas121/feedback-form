angular.module('feedback', [
])

  .directive('feedbackForm', function() {
    return {
      restrict: 'A',
      scope: {
        options: '&'
      },
      templateUrl: '../src/feedbackForm.html',
      controller: function ($scope) {

      }
    };
  })

;
