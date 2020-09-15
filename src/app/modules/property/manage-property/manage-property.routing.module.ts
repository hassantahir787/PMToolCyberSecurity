import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth-guard.service'
import { ManagePropertyComponent} from './manage-property.component'
const routes: Routes = [
    {
      path: '',
      component: ManagePropertyComponent
    }
  ]
  
  
  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class ManagePropertyRoutingModule { }
  