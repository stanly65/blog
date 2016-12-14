import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ROUTES}from './app.router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IndexloggedComponent } from './indexlogged/indexlogged.component';
import { CreatenewpostComponent } from './createnewpost/createnewpost.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    IndexloggedComponent,
    CreatenewpostComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
