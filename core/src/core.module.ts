import { NgModule } from '@angular/core';

import {
    ButtonComponent,
    TitleComponent
} from './components';

@NgModule({
    declarations: [
        ButtonComponent,
        TitleComponent
    ],
    exports: [
        ButtonComponent,
        TitleComponent
    ]
})
export class CoreModule { }
