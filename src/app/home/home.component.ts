///<reference path="../../../node_modules/rxjs/internal/Observable.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // h1Style: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {

  }


}

// firstClick(){
//   this.h1Style = true;
// }
// secondClick() {
//   this.data.secondClick();
// }
