/*global describe, beforeEach, afterEach, inject, it, expect, ddescribe, iit, xit, xdescribe, jasmine*/
'use strict';

describe('DeviceSrv Service:', function () {

    var DeviceSrv, $window,
        stub = {
            navigator: {
                userAgent: {}
            }
        },
        userAgents = {
            test: 'foobar'
        };

    beforeEach(module('myDeviceApp'));

    beforeEach(
        module('myDeviceApp', function ($provide) {
            $provide.value('$window', stub);
        })
    );

    beforeEach(inject(function ($injector) {

        DeviceSrv = $injector.get('DeviceSrv');
        $window = $injector.get('$window');

    }));

    it('should return custom user agent', function () {
        var result;
        stub.navigator.userAgent = userAgents.test;
        result = DeviceSrv.getUserAgent();
        expect(result).to.equal('foobar');
    });
});


