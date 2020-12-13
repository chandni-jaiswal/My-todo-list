import { Component, inject, Injector } from '@angular/core';
import { User } from '../app.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder } from '@angular/forms';
import {BaseLogger } from '../Utility/User.Logger' 

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
   user : User;
   users : User[] =[];
   Logobj : BaseLogger = null;
  genders=['Male','Female'];
  registerForm: FormGroup;
  constructor(_injector:Injector) {
    this.Logobj=_injector.get("1");
    this.Logobj.Log();
   }
   ngOnInit() {
       this.registerForm= new FormGroup({
           'name':new FormControl(null, Validators.required),
           'email':new FormControl(null, [Validators.required, Validators.email]),
        
      'gender':new FormControl(null, Validators.required),
      'mobileNo':new FormControl(null,[Validators.pattern("[0-9]{3}[0-9]{3}[0-9]{4}")])

    });
  }
  onSubmit() {
     if (this.registerForm.valid) {
     this.user = this.registerForm.value;
     this.users.push(this.user);
     console.log(this.user);
    }
}
  }
  
