import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth-guard.service'
import { CreateItemComponent} from './create-item.component'
const routes: Routes = [
    {
      path: '',
      component: CreateItemComponent
    }
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class CreateItemRoutingModule { }
  