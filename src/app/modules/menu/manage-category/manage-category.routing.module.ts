import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth-guard.service'
import { ManageCategoryComponent} from './manage-category.component'
const routes: Routes = [
    {
      path: '',
      component: ManageCategoryComponent
    }
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class ManageCategoryRoutingModule { }
  