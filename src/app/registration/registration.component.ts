import { Component, inject, Injector } from '@angular/core';
import { User } from '../app.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder } from '@angular/forms';
import {BaseLogger } from '../Utility/User.Logger' ;
import {HttpClient} from '@angular/common/http';

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
  constructor(_injector:Injector, public http : HttpClient) {
    this.Logobj=_injector.get("1");
    this.Logobj.Log();
   }
   SelectUser(_selected:User){
     this.user=_selected;
   }
   PosttoServer(){
    this.http.post("http://localhost:3000/Users",this.user)
    .subscribe(this.Success,this.Error);
   }
   Error(res){
    console.debug(res.json());
   }
   Success(res){
    this.users = res.json();
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
  
