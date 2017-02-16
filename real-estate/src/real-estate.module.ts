import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@lvl/core';

import {
    GalleryComponent
} from './components';
import { RealEstateRouterModule } from './real-estate.router.module';

@NgModule({
    declarations: [
        GalleryComponent
    ],
    exports: [
        GalleryComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        RealEstateRouterModule
    ]
})
export class RealEstateModule { }
