import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileComponent } from 'src/app/modules/settings/profile/profile.component';
import { SignUpComponent } from 'src/app/modules/authentication/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/modules/authentication/sign-in/sign-in.component';
import { ChangePasswordComponent } from 'src/app/modules/settings/change-password/change-password.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked: EventEmitter<any> = new EventEmitter();
  @Output() languageChanged: EventEmitter<any> = new EventEmitter();

  language = "en";

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  constructor(private modalService: BsModalService,
    public router: Router,
    private authService: AuthService,private translate:TranslateService) { }

  ngOnInit() {
  }

  onMenuClicked() {
    this.menuClicked.emit();
  }

  goToHome() {
    console.log("Navigating to home");
    this.router.navigate(["/"]);
  }

  goToCourseList() {
    this.router.navigate(["/course-list"]);
  }

  signIn() {
    let modalRef = this.modalService.show(SignInComponent);
  }

  goToChangePassword() {
    // this.router.navigate(["/change-password"]);
    let modalRef = this.modalService.show(ChangePasswordComponent);
  }

  goToProfile() {
    // this.router.navigate(["/change-password"]);
    let modalRef = this.modalService.show(ProfileComponent);
  }

  goToMyAccount(){
    this.router.navigate(['/', 'my', 'account', { outlets: { 'page': ["courses"] } }])

    // this.router.navigate(["/my/account"]);  
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(["/"]);
  }
  
  onLanguageChange(language){
    if(language){
      this.language = "ur";
    }
    else{
      this.language = "en";
    }

    this.translate.setDefaultLang(this.language);
    this.languageChanged.emit(this.language);
  }
}
