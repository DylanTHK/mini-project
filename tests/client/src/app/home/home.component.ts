import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // method to get user's current location
    // navigator.geolocation.getCurrentPosition(position => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    //   }
    // })
  }

}
