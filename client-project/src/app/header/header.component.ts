import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { UserInfo } from '../models/model';

@Component({
  selector: 'app-header',
  // imports: [NgbDropdownModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuCollapsed = true;
  isLoggedIn = false;
  loginSub$ = new Subscription();
  currentUser!: UserInfo;

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    let u: UserInfo = JSON.parse(sessionStorage.getItem("user") || '{}');
    this.isLoggedIn = u.loginStatus;
    this.currentUser = u;
    
    this.loginSub$ = this.userSvc.loginStatus.subscribe(
      (data: boolean) => {
        this.isLoggedIn = data;
        u = JSON.parse(sessionStorage.getItem("user") || '{}');
        this.currentUser = u;
      }
    )
  }

  ngOnDestroy(): void {
      this.loginSub$.unsubscribe();
  }

}
