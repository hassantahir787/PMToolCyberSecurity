import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-change',
  templateUrl: './forgot-password-change.component.html',
  styleUrls: ['./forgot-password-change.component.scss']
})
export class ForgotPasswordChangeComponent implements OnInit {
  forgotPasswordChangeForm = null;

  constructor() { }

  ngOnInit() {
    this.forgotPasswordChangeForm = new FormGroup({
      new_password: new FormControl(''),
      confirm_password: new FormControl('')
    });
  }

}
