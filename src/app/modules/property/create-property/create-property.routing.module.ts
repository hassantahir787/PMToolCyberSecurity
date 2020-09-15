import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth-guard.service'
import { CreatePropertyComponent} from './create-property.component'
const routes: Routes = [
    {
      path: '',
      component: CreatePropertyComponent
    }
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class CreatePropertyRoutingModule { }
  