import { Component } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
import { UserInfo } from '../models/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userInfo!: UserInfo;

  constructor(private googleSvc: GoogleApiService) { }
  //   googleSvc.userProfileSubject.subscribe( info => {
  //     console.info(info);
  //     this.userInfo = info;
  //   })
  //  }

  //  isLoggedIn(): boolean {
  //   return this.googleSvc.isLoggedIn();
  //  }

  //  logout() {
  //   this.googleSvc.signOut();
  //  }
}