import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import {FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user : User;
  
  constructor( private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.formBuilder) {
      console.log("Form Submitted!");
    }

}
}
