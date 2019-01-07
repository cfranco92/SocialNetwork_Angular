import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let myUser: User = {
      nick: 'Cristian',
      age: 26,
      email: 'aoe@aoe.aoe',
      friend: true,
      uid: 1
    };
    let users: User[] = [
      myUser
    ];
  }

  ngOnInit() {
  }

}
