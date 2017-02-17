import { NgModule } from '@angular/core';

import {
    TitleComponent
} from './components';

@NgModule({
    declarations: [
        TitleComponent
    ],
    exports: [
        TitleComponent
    ]
})
export class CoreModule { }
