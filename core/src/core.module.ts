import { NgModule } from '@angular/core';
import 'hammerjs';

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
