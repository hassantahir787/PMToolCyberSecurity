import { Component, OnInit } from '@angular/core';
import {MenuService} from '../service/menu.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  categories:any;
  subCategory:any;
  branches:any;
  constructor(private categoryService:MenuService) { }

  ngOnInit() {

    this.categoryService.getCategories().subscribe((result:any)=>{
   this.categories=result.data.data[0];
  console.log(this.categories);
    });
    // this.categoryService.getSubCategories().subscribe((result:any)=>{
    //   this.subCategory=result;
    //  console.log(this.subCategory);
    //    });
    this.categoryService.getBranches().subscribe((result:any)=>{
      this.branches=result;
      console.log(result);
    })   
  }


  dropdownOptions = [{
    '_id': '5a66d6c31d5e4e36c7711b7a',
    'index': 0,
    'balance': '$2,806.37',
    'picture': 'http://placehold.it/32x32',
    'name': 'Burns Dalton'
  },
  {
    '_id': '5a66d6c3657e60c6073a2d22',
    'index': 1,
    'balance': '$2,984.98',
    'picture': 'http://placehold.it/32x32',
    'name': 'Mcintyre Lawson'
  }];


  getSubCategories(value:any){
    this.categoryService.getSubCategories(value).subscribe((result:any)=>{
      this.subCategory=result;
     console.log(this.subCategory);
       });
    
  }

}
