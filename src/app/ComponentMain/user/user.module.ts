import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { VieweditformulaComponent } from './vieweditformula/vieweditformula.component';
import { AddnewformulaComponent } from './addnewformula/addnewformula.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    VieweditformulaComponent,
    AddnewformulaComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
