import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.route';
import { LoginService } from './login.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { ForpasswordComponent } from './forpassword/forpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForpasswordComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
