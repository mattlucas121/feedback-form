angular.module('angular-feedback-form', [
  'angular-feedback-form.templates',
  'ngAnimate'
])

  .directive('feedbackForm', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        //options: '&',
        ngModel: '=',
        submitFunction: '&'
      },
      templateUrl: 'src/angular-feedback-form.html',
      link: function (scope) {
        scope.settings = {
          showForm: false
        };


        /**
         * Opens/closes the feedback form dialog
         * @param forceOpen {Boolean} Forces form dialog to given value
         * @returns {Boolean} New state of the dialog form
         */
        scope.toggleForm = function (forceOpen) {
          var force = forceOpen || false;
          scope.feedbackForm.$setPristine();
          scope.settings.showForm = force;
          return force;
        };

      }
    };
  })

;
