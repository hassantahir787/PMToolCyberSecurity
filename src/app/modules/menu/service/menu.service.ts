import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private apiService: ApiService) { }

  public getCategories(){
    return this.apiService.sendGetRequest('cmsCategory');
  }
  public getSubCategories(value){
    let obj={
        id:value
    }
    return this.apiService.sendGetRequestParams('cmsSubCategory',obj);
  }
  public getBranches(){
    return this.apiService.sendGetRequest('branch');
  }
}
