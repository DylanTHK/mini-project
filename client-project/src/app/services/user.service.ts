import { Injectable } from '@angular/core';
import { AddUserDetails, Alert, CreatedResponse, LoginDetails, UserInfo } from '../models/model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { Router } from '@angular/router';

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
  loginStatus = new Subject<boolean>();

  private url_add = "/api/user/register-user";
  private url_login = "/api/user/login";

  constructor(private httpClient: HttpClient,
    private router: Router) { }

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
    console.info(loginData);
    const params = new HttpParams()
      .set("email", loginData.email)
      .set("password", loginData.password)

    this.httpClient.get<UserInfo>(this.url_login, {params})
      .subscribe((data: UserInfo) => {
        console.info(data)
        sessionStorage.setItem("user", JSON.stringify(data));
        this.loginStatus.next(data.loginStatus);
        this.router.navigate(['/home']);
      }, error => {
        console.info(error);
        this.loginStatus.next(error.loginStatus);
      });
  }

  logoutUser() {

  }

}
