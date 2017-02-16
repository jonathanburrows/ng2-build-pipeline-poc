/* tslint:disable:no-unused-variable */

import { TestBed, async, getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { ButtonComponent } from './button.component';
import { TestFixtures } from '../../../testing';

describe('ButtonComponent (spec)', () => {
    it('should create the app', async(() => {
        TestFixtures.getTestBed().createComponent(ButtonComponent);
        expect(true).toBe(true);
    }));
});
