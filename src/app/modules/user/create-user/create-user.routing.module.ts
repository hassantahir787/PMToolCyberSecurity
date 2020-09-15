import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../../core/guards/auth-guard.service';
import { CreateUserComponent } from './create-user.component';

const routes: Routes = [
    {
      path: '',
      component: CreateUserComponent
    }
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class CreateUserRoutingModule { }
  