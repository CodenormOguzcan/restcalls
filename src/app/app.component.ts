import { Component } from '@angular/core';
import {ConfigService} from "./config/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private configService: ConfigService) {

  }
  name: string | undefined;
  email: string | undefined;

  save() {
    this.configService.save({name: this.name, email: this.email}).subscribe();
  }
}
