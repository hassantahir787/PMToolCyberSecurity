import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ ManagePropertyRoutingModule} from './manage-property.routing.module'
import { ManagePropertyComponent} from './manage-property.component'
@NgModule({
  declarations: [ManagePropertyComponent],
  imports: [
    CommonModule,
    ManagePropertyRoutingModule
  ]
})
export class ManagePropertyModule { }
