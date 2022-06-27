import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: User[] | undefined;
  constructor(private configService: ConfigService) {
     configService.getUser().subscribe(users => {this.users = users;});
  }

  ngOnInit(): void {
  }


  deleteUser(id: String | undefined){}

}
