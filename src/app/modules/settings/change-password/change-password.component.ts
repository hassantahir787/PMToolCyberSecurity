import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm = null;

  constructor() { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      old_password: new FormControl(''),
      new_password: new FormControl(''),
      confirm_password: new FormControl('')
    });
  }

}
