/*global angular*/
(function (angular) {
    'use strict';

    angular.module('myDeviceApp', [])
        .factory('DeviceSrv', ['$window',
            function DeviceSrv($window) {

                function getUserAgent() {
                    return $window.navigator.userAgent;
                }

                return {
                    getUserAgent: getUserAgent
                };

            }
        ]);

}(angular));
