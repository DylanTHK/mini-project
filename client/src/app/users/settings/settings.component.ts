import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy{

  user!: UserInfo;
  
  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
      this.user = JSON.parse(sessionStorage.getItem("user") || '{}');
  }

  ngOnDestroy(): void {
      
  }

  changePassword() {
    console.info("changing password");
  }

  updateEmail() {
    console.info("updating email");
  }

  deleteUser() {
    this.userSvc.deleteUser(this.user.info.email);
  }

}
