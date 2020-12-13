import { Component, OnInit } from '@angular/core';
import {BaseLogger } from '../Utility/User.Logger'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Logobj : BaseLogger = null;
  constructor(_logger:BaseLogger) { 
    this.Logobj=_logger;
    this.Logobj.Log();
  }

  ngOnInit(): void {
  }

}
