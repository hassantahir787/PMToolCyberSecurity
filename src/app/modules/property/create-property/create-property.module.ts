import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CreatePropertyRoutingModule} from './create-property.routing.module'
import {CreatePropertyComponent} from './create-property.component'
import { SelectDropDownModule } from 'ngx-select-dropdown'
@NgModule({
  declarations: [CreatePropertyComponent],
  imports: [
    CommonModule,
    CreatePropertyRoutingModule,
    SelectDropDownModule 
  ]
})
export class CreatePropertyModule { }
