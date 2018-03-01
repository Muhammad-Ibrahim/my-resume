import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MibrahimComponent } from './mibrahim/mibrahim.component';
import { AccountFormComponent } from './account-form/account-form.component';

export const router: Routes = [
    { path: '', component: MibrahimComponent },
    { path: 'playground', component: MainComponent },
    { path: '**', component: MibrahimComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
