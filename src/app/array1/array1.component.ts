import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array1',
  templateUrl: './array1.component.html',
  styleUrls: ['./array1.component.css']
})
export class Array1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myuser : any[] = ['user1'];

  username : string;

  saveuser(uname:string)
  {
    this.myuser.push(uname);
    this.username="";
  }

}
