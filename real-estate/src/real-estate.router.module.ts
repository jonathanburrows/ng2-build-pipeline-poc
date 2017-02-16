import { Routes, RouterModule } from '@angular/router';

import {
    GalleryComponent
} from './components';

export const RealEstateRoutes: Routes = [
    { path: '', component: GalleryComponent }
];

export const RealEstateRouterModule = RouterModule.forChild(RealEstateRoutes);
