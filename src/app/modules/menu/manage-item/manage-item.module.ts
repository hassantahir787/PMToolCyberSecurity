import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ManageItemRoutingModule} from './manage-item.routing.module'
import {ManageItemComponent} from './manage-item.component'
@NgModule({
  declarations: [ManageItemComponent],
  imports: [
    CommonModule,
    ManageItemRoutingModule
  ]
})
export class ManageItemModule { }
