import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array2',
  templateUrl: './array2.component.html',
  styleUrls: ['./array2.component.css']
})
export class Array2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uname : string;
  ucity : string;
  uage : string;

  myuser : any[] = [
    {"Name":"Vinoth","City":"Bangalore","Age":"30 Years"},
    {"Name":"Kumar","City":"Chennai","Age":"25 Years"}
  ];

  saveuser(n:string,c:string,a:string)
  {
    var newuser = {"Name":n, "City":c, "Age":a};
    this.myuser = this.myuser.concat(newuser);

    this.uname="";
    this.ucity="";
    this.uage="";
  }

  deluser(index:number)
  {
    this.myuser.splice(index,1);
  }

}
