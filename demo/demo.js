angular.module('demo', ['angular-feedback-form'])

  .controller('DemoController', function($scope, $log, $http) {
    $scope.formData = {
      name: '',
      email: '',
      comment: ''
    };

    $scope.submitForm = function () {
      var url = 'https://docs.google.com/a/kwantera.com/forms/d/1MSew1WJu-' +
      'caN6dwUtxszZsGPPn3r-XrRAdbR5JP4yLE/formResponse?idq';

      console.log('submitted form');
      //$http.get(url, {
      //  params: {
      //    'entry.1128582109': $scope.formData.name,
      //    'entry.182208790': $scope.formData.email,
      //    'entry.1217281573': $scope.formData.comment
      //  }
      //});
    };

  })

;
