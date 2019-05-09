import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public API_URL: string = "https://reqres.in/api/";

  constructor(private http: HttpClient) { }

  getMethod(url){
    return this.http.get(`${this.API_URL}${url}`);
  }

  postMethod(url, data){
    const path = `${this.API_URL}${url}`;
    return this.http.post(path, data);
  }

}
