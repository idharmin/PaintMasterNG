import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewformulaComponent } from './addnewformula/addnewformula.component';
import { HomeComponent } from './home/home.component';
import { VieweditformulaComponent } from './vieweditformula/vieweditformula.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    , children: [
      { path: 'home', component: HomeComponent },
      { path: 'addnewformula', component: AddnewformulaComponent },
      { path: 'vieweditformula', component: VieweditformulaComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
