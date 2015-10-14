angular.module('feedback', [
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
      templateUrl: '../src/feedbackForm.html',
      controller: function ($scope, $element) {
      },
      link: function (scope) {
        scope.settings = {
          showForm: false
        };

        /**
         * Toggles status of dialog form
         * @param force Boolean optional, forces form dialog to given value
         * @returns {*} New state of the dialog form
         */
        scope.toggleForm = function (force) {
          if (angular.isDefined(force)) {
            scope.settings.showForm = force;
            return force;
          }

          scope.settings.showForm = !force;
          return force;
        };

      }
    };
  })

;
