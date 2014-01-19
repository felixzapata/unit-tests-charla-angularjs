/*global angular*/
(function (angular) {

    'use strict';

    angular.module('ctrl.my.app', [])
        .controller('UserCtrl', ['$scope', 'UserSrv',
            function ($scope, UserSrv) {
              var result = UserSrv.getUser();
                $scope.fullName = result.name + ' ' + result.lastName;
            }
        ]);
}(angular));
