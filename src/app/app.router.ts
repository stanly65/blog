import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

 // import {AppComponent} from './app.component';
import {CreatenewpostComponent} from './createnewpost/createnewpost.component';
import {IndexComponent} from './index/index.component';
import {IndexloggedComponent} from './indexlogged/indexlogged.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const router: Routes = [
    {path: '',redirectTo:'index', pathMatch: 'full'},
    // {path: 'app',component: AppComponent},
    {path: 'createnewpost',component: CreatenewpostComponent},
    {path: 'index',component: IndexComponent},
    {path: 'indexlogged',component: IndexloggedComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];

export const ROUTES:ModuleWithProviders = RouterModule.forRoot(router);
