import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordChangeComponent } from './forgot-password-change/forgot-password-change.component';
import { SharedModule } from '../../shared/shared.module';
import { AlertModule } from 'ngx-bootstrap';
import{ AuthRoutingModule } from 'src/app/modules/authentication/auth-routing.module';



@NgModule({
  declarations: [
    ForgotPasswordComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordChangeComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  entryComponents: [ForgotPasswordComponent]
})
export class AuthenticationModule { }
