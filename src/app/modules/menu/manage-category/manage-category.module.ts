import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ManageCategoryRoutingModule} from './manage-category.routing.module'
import {ManageCategoryComponent} from './manage-category.component'
@NgModule({
  declarations: [ManageCategoryComponent],
  imports: [
    CommonModule,
    ManageCategoryRoutingModule
  ]
})
export class ManageCategoryModule { }
