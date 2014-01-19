/*global describe, it, should, beforeEach, inject, afterEach, expect*/
'use strict';

describe('myAppConfig Service:', function () {
    var myAppConfig,
        testProvider, dataConfigProvider;

    beforeEach(module('myApp'));

    beforeEach(function () {

        module(function ($provide, myAppConfigProvider) {

            testProvider = myAppConfigProvider;
            dataConfigProvider = {
                mobile: true,
                language: 'es'
            };
            testProvider.setAppConfig(dataConfigProvider);

        });
    });

    beforeEach(inject(function ($injector) {
        myAppConfig = $injector.get('myAppConfig');
    }));

    describe('Provider Test', function () {

        it('should exists', function () {
            expect(testProvider).not.toBeNull();
        });

        it('should have parameters', function () {
            expect(myAppConfig.getMyDataConfig()).toBe(dataConfigProvider);
        });

    });

});
