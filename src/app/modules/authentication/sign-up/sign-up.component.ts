import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @ViewChild("testModal", null) testModal;
  signUpForm = null;

  constructor(private elementRef: ElementRef,
    private apiService: ApiService,
    private toastService: ToastrService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
      termsConditions: new FormControl('')
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(fg: FormGroup) {
    if (fg.get('password') && fg.get('repeatPassword') && fg.get('password').value === fg.get("repeatPassword").value) {
      return null;
    } else {
      return {
        mismatch: true
      };
    }
  }

  onSubmit() {
    const value = this.signUpForm.value;

    if (this.signUpForm.valid) {
      this.apiService.createUser(value)
        .subscribe((res) => {
          console.log('User was created', res);
          this.toastService.success("User successfully created");
        },
          (err) => {
            console.log('Error: ', err);
          });
    } else {
      const invalidControl = this.elementRef.nativeElement.querySelector('.ng-invalid');
      console.log('Invalid: ', invalidControl);

      if (invalidControl) {
        invalidControl.focus();
      }

      // this.testModal.nativeElement.parent.hide();
    }
  }

}
