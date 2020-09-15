import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm = null;

  constructor() { }

  ngOnInit() {
    

    this.profileForm = new FormGroup({
      email: new FormControl(''),
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      password: new FormControl(''),
      repeat_password: new FormControl(''),
      gender: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl('')
    });
  }

}
