import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { LoginRouting } from '../Routing/LoginRouting';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    RouterModule.forChild(LoginRouting),
    BrowserModule,
    AppRoutingModule,
    NgModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
