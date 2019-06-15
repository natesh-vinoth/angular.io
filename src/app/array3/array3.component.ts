import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array3',
  templateUrl: './array3.component.html',
  styleUrls: ['./array3.component.css']
})
export class Array3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  item1 : any[] = ["user1"];

  Username : string;

  getitem(uname : string)
  {
    this.item1.push(uname);
    this.Username = "";
  }

}
