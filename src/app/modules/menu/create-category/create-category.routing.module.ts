import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth-guard.service'
import { CreateCategoryComponent} from './create-category.component'
const routes: Routes = [
    {
      path: '',
      component: CreateCategoryComponent
    }
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class CreateCategoryRoutingModule { }
  