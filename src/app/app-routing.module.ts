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
  // { path: 'courses', loadChildren: '../app/modules/course/course.module#CourseModule' },
  // { path: 'user', loadChildren: '../app/modules/user/user.module#UserModule' },
  { path: 'settings', loadChildren: '../app/modules/settings/settings.module#SettingsModule' },
  { path: 'authentication', loadChildren: '../app/modules/authentication/authentication.module#AuthenticationModule' },
  // { path: 'my', loadChildren: '../app/modules/my-account/my-account.module#MyAccountModule' },
  { path: 'create-user', loadChildren: '../app/modules/user/create-user/create-user.module#CreateUserModule' },
  { path: 'manage-user', loadChildren: '../app/modules/user/manage-user/manage-user.module#ManageUserModule' },
  { path: 'create-property', loadChildren: '../app/modules/property/create-property/create-property.module#CreatePropertyModule' },
  { path: 'manage-property', loadChildren: '../app/modules/property/manage-property/manage-property.module#ManagePropertyModule' },
  { path: 'create-item', loadChildren: '../app/modules/menu/create-item/create-item.module#CreateItemModule' },
  { path: 'manage-item', loadChildren: '../app/modules/menu/manage-item/manage-item.module#ManageItemModule' },
  { path: 'login', loadChildren: '../app/modules/login/login.module#LoginModule' },
  { path: 'signup', loadChildren: '../app/modules/signup/signup.module#SignupModule' }
  // { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
