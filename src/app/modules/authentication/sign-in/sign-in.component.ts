import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import { SignUpComponent } from '../sign-up/sign-up.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm = null;
  serverSideError = false;

  constructor(private modalService: BsModalService,
    private authService: AuthService,
    private bsModalRef: BsModalRef,
    private router: Router,
    private toastr: ToastrService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  forgotPassword() {
    this.bsModalRef.hide();

    this.modalService.show(ForgotPasswordComponent);

  }

  signUp() {
    this.bsModalRef.hide();

    this.modalService.show(SignUpComponent);
  }

  onSignInWithGoogle() {
    this.document.location.href = "http://localhost:3000/auth/google";
  }

  onSubmit() {
    const credentials = this.signInForm.value;

    let result: any;
    if (this.signInForm.valid) {
      this.authService.login(credentials.username, credentials.password)
        .subscribe((res) => {
          result = res;
          if (result.success) {
            this.router.navigate(['/']);
          }
          this.bsModalRef.hide();
        },
          (err) => {
            // this.toastr.error('Invalid username or password');
            this.serverSideError = true;
          });
    }
  }

  // test() {
  //   this.httpClient.get("http://localhost:3000/test")
  //     .subscribe((res) => {
  //       console.log("Successfully posted:", res);
  //     }, (err) => {
  //       console.log("Error while sending post request", err);
  //     });
  // }
}
