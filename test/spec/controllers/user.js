/*global describe, beforeEach, afterEach, inject, it, expect, ddescribe, iit, xit, xdescribe, jasmine, spyOn*/
'use strict';
ddescribe('UserCtrl Controller:', function () {
    var UserSrv, $rootScope, $controller, UserCtrl;

    beforeEach(module('srv.my.app'));
    beforeEach(module('ctrl.my.app'));
    beforeEach(inject(function ($injector) {
        UserSrv = $injector.get('UserSrv');
        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        spyOn(UserSrv, 'getUser').andCallFake(function () {
            return {
                'name': 'John',
                'lastName': 'Smith'
            };
        });

    }));

    it('should add full name to scope', function () {
        var scope = $rootScope.$new();
        UserCtrl = $controller('UserCtrl', {
            $scope: scope,
            'UserSrv': UserSrv
        });
        scope.$digest();
        expect(UserSrv.getUser).toHaveBeenCalled();
        expect(scope.fullName).to.equal('John Smith');
    });
});
