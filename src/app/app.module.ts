import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthenticationModule } from 'src/app/modules/authentication/authentication.module';
import { SettingsModule } from 'src/app/modules/settings/settings.module';
// import { UserModule } from 'src/app/modules/user/user.module';
// import { CourseModule } from 'src/app/modules/course/course.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './layouts/parts/header/header.component';
import { NavdrawerComponent } from './layouts/parts/navdrawer/navdrawer.component';
import { HomeComponent } from './layouts/portals/home/home.component';
// import { TestimonialComponent } from './layouts/portals/home/testimonial/testimonial.component';
// import { AboutComponent } from './layouts/portals/home/about/about.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { CareersComponent } from './layouts/portals/home/careers/careers.component';
// import { CompanyPlansComponent } from './layouts/portals/home/company-plans/company-plans.component';
import { FooterComponent } from './layouts/parts/footer/footer.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { SignupModule } from './modules/signup/signup.module';
import { LoginModule } from './modules/login/login.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavdrawerComponent,
    HomeComponent,
    // TestimonialComponent,
    // AboutComponent,
    // CareersComponent,
    // CompanyPlansComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

    UiSwitchModule.forRoot({
      size: 'small',
      color: '#FFFFFF',
      switchColor: '#475677',
      defaultBgColor: '#FFFFFF',
      defaultBoColor : '#707070',
      checkedLabel: 'اردو',
      uncheckedLabel: 'English'
    }),


    // HD Modules below
    CoreModule,
    SharedModule,
    AuthenticationModule,
    SettingsModule,
    // UserModule,
    // CourseModule,
    // CreateUserModule,
    // ManageUserModule,
    // CreatePropertyModule,
    // ManagePropertyModule,
    // CreateItemModule,
    // ManageItemModule,
    // CreateCategoryModule,
    // ManageCategoryModule,
    SignupModule,
    LoginModule,
    TooltipModule.forRoot(),
    
    ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
