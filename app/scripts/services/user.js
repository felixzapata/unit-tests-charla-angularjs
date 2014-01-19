/*global angular*/
(function (angular) {
    'use strict';

    angular.module('srv.my.app', [])
        .factory('UserSrv', [
            function UserSrv() {

                function getUser() {
                    return {
                        'name': 'John',
                        'lastName': 'Doe'
                    };
                }

                return {
                    getUser: getUser
                };

            }
        ]);

}(angular));
