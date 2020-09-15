import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './layouts/portals/home/home.component' ;


import { AuthGuard } from '../app/core/guards/auth-guard.service';
// import { AboutComponent } from './layouts/portals/home/about/about.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'main',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  { path: 'login', loadChildren: '../app/modules/login/login.module#LoginModule' },
  { path: 'signup', loadChildren: '../app/modules/signup/signup.module#SignupModule' }
  // { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
