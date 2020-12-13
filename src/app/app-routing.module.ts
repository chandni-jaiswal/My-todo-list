import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [{ path: 'Home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registration', component: RegistrationComponent },
// { path: 'Login', loadChildren: () => import('../app/login/login.module').then(w => w.LoginModule) },
// {
//   path: 'Registration', loadChildren: () => import('../app/registration/registration.module')
//     .then(m => m.RegistrationModule)
// },
{ path: '', component: HomeComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
