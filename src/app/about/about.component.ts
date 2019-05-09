import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  resources: object;
  errorMsg: object;
  users: object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users)
    });

    this.data.getResources().subscribe(data => {
        console.log(data);
        this.resources = data;
        console.log(this.resources);
      }, error => this.errorMsg = error

    );
  }
  createUser(){
    this.data.createUser().subscribe(data =>{
      this.users['data'].push(data);
      console.log(this.users)
    });
  }
}
