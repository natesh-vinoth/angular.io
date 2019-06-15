import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private obj : HttpClient) { }

  ngOnInit() {
    this.getitem();
  }

  item1 : any[];

  getitem()
  {
    this.obj.get("assets/item2.json").subscribe(
    response =>
    { 
      this.item1 = response as string[];
    }
    );
  }

  uname:string;
  uemail:string;
  umobile:string;
  ugender:string;

  saveuser(n:string, e:string, m:string, g:string)
  {
    var newuser = {"Name":n, "Email":e, "Mobile":m, "Gender":g};
    this.item1 = this.item1.concat(newuser);

    this.uname="";
    this.uemail="";
    this.umobile="";
    this.ugender="";
  }

}
