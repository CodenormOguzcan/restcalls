import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userUrl = 'api/users';

  constructor(private http: HttpClient) {

  }

  getUser() {
    return this.http.get<User[]>(this.userUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }
}
