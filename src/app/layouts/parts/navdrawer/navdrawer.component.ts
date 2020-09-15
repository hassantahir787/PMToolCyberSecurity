import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navdrawer',
  templateUrl: './navdrawer.component.html',
  styleUrls: ['./navdrawer.component.scss']
})
export class NavdrawerComponent implements OnInit {
  @ViewChild("navdrawer", null) navdrawer: ElementRef;
  @Input("menuOpened") menuOpened;
  @Output() menuClosed: EventEmitter<any> = new EventEmitter();

  navData = [
    {
      title: "Courses",
      route: "",
      submenus: [{
        title: "All courses",
        route: "/course-list"
      },{
        title: "Favorite courses",
        route: "/course-list"
      },{
        title: "Featured courses",
        route: "/course-list"
      },
      {
        title: "Review courses",
        route: "/course-list"
      }]
    },
    {
      title: "Manage users",
      route: "/manage-users"
    },
    {
      title: "Add categories",
      route: "/course-list"
    },

  ];

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  openNav() {
    console.log("Clicked on open: ", this.menuOpened);
  }

  /* Set the width of the side navigation to 0 */
  closeNav() {
    console.log("Clicked on close: ", this.menuOpened);
    this.menuOpened = false;
    this.menuClosed.emit();
    this.changeDetectorRef.detectChanges();
  }

  goToRoute(route:string){
    if(route == ""){
      return;
    }

    this.router.navigate([route]);
    this.closeNav();
  }
  
}
