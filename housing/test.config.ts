// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { HousingModule } from './src';
import { TestFixtures } from '@lvl/core';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

TestFixtures.initTestBed(HousingModule, BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// Find all the tests.
const modulesSpecTests = [
    require.context('./src', true, /\.spec\.ts$/),
    require.context('@lvl/core/src', true, /\.spec\.ts$/),
    require.context('@lvl/real-estate/src', true, /\.spec\.ts$/)
];

// And load the modules.
for (let moduleSpecTest of modulesSpecTests) {
    moduleSpecTest.keys().map(moduleSpecTest);
}

// Finally, start Karma to run the tests.
__karma__.start();
