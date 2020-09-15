import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule, BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { SelectFileComponent } from './select-file/select-file.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    SelectFileComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [
    AlertModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    SelectFileComponent,
    ToastrModule,
    BsDropdownModule,
    TabsModule
  ]
})
export class SharedModule { }
