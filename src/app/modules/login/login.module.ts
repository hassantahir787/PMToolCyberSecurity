import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LoginRoutingModule} from './login.routing.module'
import {LoginComponent} from './login.component'
import { HomeComponent } from 'src/app/layouts/portals/home/home.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
  
})
export class LoginModule {
    constructor(private router: Router) {

    }

    Gotopage() {
        this.router.navigateByUrl('/home');
};

    
}
