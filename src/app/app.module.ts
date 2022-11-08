import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ComponentBoot/login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './ComponentBoot/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorPageComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
