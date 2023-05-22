import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserInfo } from '../models/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
    let u: UserInfo = JSON.parse(sessionStorage.getItem("user") || '{}');
    this.isLoggedIn = u.loginStatus;
  }

}
