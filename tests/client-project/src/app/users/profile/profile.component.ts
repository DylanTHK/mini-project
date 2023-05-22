import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/models/model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: UserInfo;
  
  constructor() { }

  ngOnInit(): void {
      this.user = JSON.parse(sessionStorage.getItem("user") || '{}');
  }
}
