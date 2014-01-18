/*global angular*/
(function (angular) {
    'use strict';

    angular.module('myApp', [])
        .provider('myAppConfig', function () {
            var options = {
                mobile: '',
                language: ''
            };

            this.setAppConfig = function (config) {
                options = config;
            };

            this.$get = [
                function myAppConfig() {

                    function getMyDataConfig() {
                        return options;
                    }

                    return {
                        getMyDataConfig: getMyDataConfig
                    };
                }
            ];
        });

}(angular));
