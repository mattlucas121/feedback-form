angular.module('demo', ['feedback'])

  .controller('DemoController', function($scope) {
    $scope.submitForm = function () {
      console.log('Submitted form!');
    };

    $scope.test = 'test';

    $scope.formData = {
      name: 'test1',
      email: 'test2',
      comment: 'test2'
    };
  })

;
