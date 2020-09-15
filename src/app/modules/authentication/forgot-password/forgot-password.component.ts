import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  forgotPasswordForm = null;

  constructor() { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('')
    });

  }

}
