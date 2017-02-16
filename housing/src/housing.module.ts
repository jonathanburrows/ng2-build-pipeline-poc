import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
    CoreModule,
    DataService
} from '@lvl/core';

import {
    AboutComponent,
    AppComponent
} from './components';
import { HousingRouterModule } from './housing.router.module';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent
    ],
    exports: [
        AboutComponent,
        AppComponent
    ],
    providers: [
        DataService
    ],
    imports: [
        BrowserModule,
        CommonModule,
        CoreModule,
        FormsModule,
        HousingRouterModule,
        HttpModule,
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class HousingModule { }
