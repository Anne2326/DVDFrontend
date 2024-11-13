import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './layout/user/user.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BlankComponent } from './layout/blank/blank.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterOutlet } from '@angular/router';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    BlankComponent,
    LoginComponent,
    RegisterComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
