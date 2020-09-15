import { Component, ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'[class]': "language=='ur'?'hd-urdu': ''"}
})
export class AppComponent {
  title = 'Street Online CMS';
  menuOpened = false;
  coursesList = [];
  language = "en";

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor (private apiService:ApiService,private translate: TranslateService,
    private changeDetectorRef: ChangeDetectorRef){
    translate.setDefaultLang('en');
    this.language = 'hd-urdu';
  }

  ngOnInit() {
    this.apiService.getCoursesList(1, 10)
    .subscribe((result: any) => {

      this.coursesList = result.data;
      console.log("Courses list: ", this.coursesList);
      this.changeDetectorRef.detectChanges();
    });
  }

  onMenuOpened(){
    this.menuOpened = true;
  }

  onMenuClosed(){
    this.menuOpened = false;
    this.changeDetectorRef.detectChanges();
  }

  onLanguageChanged(language: string){
    this.language = language;
    this.changeDetectorRef.detectChanges();
  }


  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
