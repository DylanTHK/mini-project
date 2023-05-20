import { Injectable } from '@angular/core';
import { AddUserDetails } from '../models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url_add = "/api/user/register-user";

  constructor(private httpClient: HttpClient) { }

  addUser(user: AddUserDetails) {
    console.info("adding user" + JSON.stringify(user));

    // TODO: connect to Spring Boot
    this.httpClient.post(
      this.url_add, 
      user
    )
    .subscribe(data => {
      console.info(data);
    });

  }


}
