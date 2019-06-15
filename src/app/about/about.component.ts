import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private obj : HttpClient) { }

  ngOnInit() {
    this.getitem();
  }

  item1 : any[];
  totalitem : string = "Please Wait !!!!";

  getitem()
  {
    // var url = "http://cybotrix.com/angularapi/getrecord.php";
    this.obj.get("http://cybotrix.com/angularapi/getrecord.php").subscribe(
      response =>{
        this.item1 = response as string[];
        this.totalitem = "Total Item : " +this.item1.length;
      } 
    );
  }

  
}
