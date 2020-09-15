import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService, BsModalRef, ModalModule, AlertModule } from 'ngx-bootstrap';
import { AuthGuard } from './guards/auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModalModule,
    AlertModule,
    HttpClientModule,
    //HD modules below
    SharedModule
    ],
  exports: [
  ],
  providers: [
    BsModalService,
    BsModalRef,

    //HD services below
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
