import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CreateItemRoutingModule} from './create-item.routing.module'
import {CreateItemComponent} from './create-item.component'
import { SelectDropDownModule } from 'ngx-select-dropdown'


@NgModule({
  declarations: [CreateItemComponent],
  imports: [
    CommonModule,
    CreateItemRoutingModule,
    SelectDropDownModule
  ]
})
export class CreateItemModule { }
