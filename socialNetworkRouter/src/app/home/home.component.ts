import { UserService } from './../services/user.service';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[];
  query: String = '';
  constructor(private userServices: UserService) {
    this.friends = this.userServices.getFriends();
  }

  ngOnInit() {
  }

}
