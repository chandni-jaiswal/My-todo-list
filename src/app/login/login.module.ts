import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRouting } from '../Routing/LoginRouting';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(LoginRouting),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
