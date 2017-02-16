import { PlatformRef, Type } from '@angular/core';
import { TestBed, getTestBed, async, TestModuleMetadata, ComponentFixture } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

export class TestFixtures {
    private static testBed: TestBed;

    public static initTestBed<TAppModule>(appModuleType: Type<TAppModule>, ngModule: Type<any>, platform: PlatformRef) {
        if (!appModuleType) {
            throw new Error('appModuleType is null.');
        }

        this.testBed = new NonResettingTestBed();

        this.testBed.initTestEnvironment(ngModule, platform);
        this.testBed.configureTestingModule({ imports: [appModuleType, RouterTestingModule] });
        this.testBed.overrideModule(BrowserModule, ngModule);
        this.testBed.ngModule = ngModule;
        this.testBed.compileComponents();
    }

    public static getTestBed() {
        if (!this.testBed) {
            throw new Error('initTestBed has not been called');
        }
        return this.testBed;
    }
}

class NonResettingTestBed extends TestBed {
    resetTestingEnvironment() {
        return this;
    }

    resetTestingModule() {
        return this;
    }

    configureTestingModule(moduleDef: TestModuleMetadata) {
        super.configureTestingModule(moduleDef);
    }
}
