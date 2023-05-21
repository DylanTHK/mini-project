import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marker } from '../models/model';
import { Subscription } from 'rxjs';
import { GoogleMapsService } from '../services/google-maps.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy  {
  @ViewChild (GoogleMap, { static: false }) map!: GoogleMap;
  // @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  markers: Marker[] = [];
  selectedPositions: Marker[] = [];

  redMarkerOptions: google.maps.MarkerOptions = {
    icon: {url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
  }
  greenMarkerOptions: google.maps.MarkerOptions = {
    icon: {url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
  }

  zoom = 14;
  // set center to tampines (location with 3 fitness corners in proximity)
  center: google.maps.LatLngLiteral = {
        lat: 1.332326,
        lng: 103.936659
  };

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
    draggableCursor:''
  };

  locationSub$!: Subscription;

  constructor(private googleMapsSvc: GoogleMapsService) { }

  ngOnInit(): void {

    this.locationSub$ = this.googleMapsSvc.locationSubject.subscribe(
      (data: Marker[]) => {
        this.markers = data;
        console.info("markers: ", this.markers);
      }
    )
  }

  ngOnDestroy(): void {
      this.locationSub$.unsubscribe();
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom!)
      this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!)
      this.zoom--
  } 

  findLocations(event: google.maps.MapMouseEvent) {
    // place marker on selected location
    this.selectedPositions = [];
    if (event.latLng != null) {
      this.selectedPositions.push({
        position: event.latLng.toJSON(),
        name: "Selected Location"
      });
      
      // find nearby locations
      const pos = event.latLng.toJSON()
      console.info(pos);
      this.googleMapsSvc.getNearbyLocations(pos.lat, pos.lng);

    }
    
  }

  openInfo(marker: MapMarker, infoWindow: MapInfoWindow) {
    console.info(marker);
    infoWindow.open(marker);
  }
}
