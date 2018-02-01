import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForpasswordComponent } from './forpassword/forpassword.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'login/pass', component: ForpasswordComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
