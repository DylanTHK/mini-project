import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Marker } from 'src/app/models/model';
import { GoogleMapsService } from 'src/app/services/google-maps.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, OnDestroy {

  markers: Marker[] = [];
  locationSub$!: Subscription;

  constructor(private googleMapsSvc: GoogleMapsService) { };

  ngOnInit(): void {
      this.locationSub$ = this.googleMapsSvc.locationSubject.subscribe(
        (data: Marker[]) => {
          this.markers = data;
        }
      )
  }

  ngOnDestroy(): void {
      this.locationSub$.unsubscribe();
  }
  
}
