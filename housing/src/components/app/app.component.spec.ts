/// <reference path="../../../node_modules/@types/jasmine/index.d.ts" />
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestFixtures } from '@lvl/core';

describe('AppComponent', () => {
    it('should create the app', async(() => {
        const fixture = TestFixtures.getTestBed().createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app works!'`, async(() => {
        const fixture = TestFixtures.getTestBed().createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Housing Application');
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestFixtures.getTestBed().createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('lvl-title').textContent).toContain('Housing Application');
    }));
});
