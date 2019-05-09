import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public API_URL: string = "https://reqres.in/api/";

  constructor(private apiService: ApiService) { }

  firstClick(){
    return console.log('clicked')
  }
  secondClick(){
    return console.log('Just a click')
  }

  getUsers(){
    return this.apiService.getMethod('users?page=2');
  }
  getResources(){
    return this.apiService.getMethod('unknown');
  }
  createUser(data?){
    const testData = {
      "name": "Ayomide",
      "job": "Dev"
        }
    return this.apiService.postMethod(`users`, testData);
  }
}
