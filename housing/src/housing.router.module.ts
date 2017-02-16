import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    AboutComponent
} from './components';

const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'real-estate', loadChildren: '@lvl/real-estate/src/real-estate.module#RealEstateModule' }
];

export const HousingRouterModule = RouterModule.forRoot(routes);
