import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
export const Routing = [
    {path:'Home', component :HomeComponent},
    // {path:'Login', component :LoginComponent},
    // {path:'Registration', component :RegistrationComponent},
     {path:'Login', loadChildren : '../login/app.LoginModule#LoginModule'},
    {path:'Registration', loadChildren: '../registration/app.RegistrationModule#RegistrationModule'},
    {path :'',component :HomeComponent}
];