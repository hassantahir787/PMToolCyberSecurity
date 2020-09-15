import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { SignUpComponent } from 'src/app/modules/authentication/sign-up/sign-up.component';
import { BsModalService } from 'ngx-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  testimonials = [{
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.",
    author: "Amanda Jackson",
    position: "CEO, NRD Group"
  },
  {
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.",
    author: "Amanda Jackson",
    position: "CEO, NRD Group"
  },
  {
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the race.",
    author: "Amanda Jackson",
    position: "CEO, NRD Group"
  }]


  constructor(private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
  }

  onClickSignUp() {
    this.modalService.show(SignUpComponent);
  }

  onClickSeeMore() {
    this.router.navigate(["/course-list"]);
  }
}
