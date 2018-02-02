import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.route';
import { AuthenticationService } from './authentication.service';
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
    HttpClientModule,
  ],
  providers: [ AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
