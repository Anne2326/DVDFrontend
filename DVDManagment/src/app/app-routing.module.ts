import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BlankComponent } from './layout/blank/blank.component';
import { ReviewComponent } from './review/review.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',  
        component: ReviewComponent
      },
      {
        path: 'login',  
        component: LoginComponent
      },{
        path: 'register',  
        component: RegisterComponent
      },
      {path:'customer',component:CustomerComponent}
     
    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 








}
