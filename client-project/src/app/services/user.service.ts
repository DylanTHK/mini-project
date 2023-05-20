import { Injectable } from '@angular/core';
import { AddUserDetails, Alert, CreatedResponse, LoginDetails } from '../models/model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, catchError, map, of } from 'rxjs';

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'Account created',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'danger',
		message: 'Email has already been used',
	},
  {
		type: 'danger',
		message: 'Incorrect email or password',
	}
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  createdSub = new Subject<boolean>();
  newAlert = new Subject<Alert>();
  private url_add = "/api/user/register-user";
  private url_login = "/api/user/login";

  constructor(private httpClient: HttpClient) { }

  // Add User to database
  addUser(user: AddUserDetails) {
    // console.info("adding user" + JSON.stringify(user));
    // connect to Spring Boot
    this.httpClient.post<CreatedResponse>(this.url_add, user)
    .subscribe((data: CreatedResponse) => {
      console.info(data);
      console.info("pushing data");
        this.newAlert.next(ALERTS[0]);
    }, (error: CreatedResponse) => {
      console.info(error);
      this.newAlert.next(ALERTS[2]);
    });
  }

  // TODO: Login
  loginUser(loginData: LoginDetails) {
    // this.httpClient.get<>(this.url_login)
  }

}
