import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private configService: ConfigService) {

  }

  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
  name: string | undefined;
  email: string | undefined;

  save() {
    this.configService.save({name: this.name, email: this.email}).subscribe();
  }
}
