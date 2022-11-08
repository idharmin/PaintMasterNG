import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './ComponentBoot/error-page/error-page.component';
import { LoginComponent } from './ComponentBoot/login/login.component';
import { HomeComponent } from './ComponentMain/user/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./ComponentMain/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    component: ErrorPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
