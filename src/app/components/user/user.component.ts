import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  hobbies: string[];


  constructor() {
    console.log("Constructor ran");
   }

  ngOnInit() {
    console.log("user-init ran");
    this.name="Harshit";
    this.age=22;
    this.hobbies=["Write Code","Listen music","Play fotball"];
  }

}
