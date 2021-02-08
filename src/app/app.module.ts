import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {Routing} from './Routing/Routing';
import { DbLogger, BaseLogger, ConsoleLogger } from './Utility/User.Logger';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,HomeComponent,LoginComponent
  ],
  imports: [
    RouterModule.forRoot(Routing),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: BaseLogger,
    useClass: ConsoleLogger},
    {provide:"1", useClass:DbLogger},
    {provide:"2", useClass: ConsoleLogger}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
