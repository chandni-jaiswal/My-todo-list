import { Component, OnInit } from '@angular/core';
import { User } from '../app.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
   user : User;
   users : User[] =[];
  genders=['Male','Female'];
  registerForm: FormGroup;
  constructor( private formBuilder: FormBuilder) {
    
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
  
