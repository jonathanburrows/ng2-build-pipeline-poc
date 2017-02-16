// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
const SpecReporter = require('jasmine-spec-reporter');


exports.config = {
    seleniumServerStartTimeout: 15000,
    getPageTimeout: 35000,
    allScriptsTimeout: 35000,
    defaultTimeoutInterval: 35000,
    specs: [
      './e2e/**/*.e2e-spec.ts',
      'node_modules/@lvl/core/src/**/*.e2e-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 35000,
        print: function () { }
    },
    useAllAngular2AppRoots: true,
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};
