/*global describe, beforeEach, afterEach, inject, it, expect, ddescribe, iit, xit, xdescribe, jasmine, spyOn*/
'use strict';

describe('DeviceSrv Service:', function () {

    var DeviceSrv;

    beforeEach(module('myDeviceAppB'));


    beforeEach(inject(function ($injector) {

        DeviceSrv = $injector.get('DeviceSrv');

    }));

    it('should return custom user agent', function () {
        var result;
        spyOn(DeviceSrv, 'getUserAgent').andCallFake(function() {
            return 'foobar';
        });
        result = DeviceSrv.getUserAgent();
        expect(result).to.equal('foobar');
    });
});


