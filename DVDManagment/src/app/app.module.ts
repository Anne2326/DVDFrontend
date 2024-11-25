import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminComponent } from './layout/admin/admin.component';
import { BlankComponent } from './layout/blank/blank.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ToastrModule } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BlankComponent,
    LoginComponent,
    RegisterComponent,
    ReviewComponent,
    CustomerComponent,
    HomeComponent,
    CustomerReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule,RouterModule, BrowserAnimationsModule,
    BsDatepickerModule,
    ToastrModule.forRoot()
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
