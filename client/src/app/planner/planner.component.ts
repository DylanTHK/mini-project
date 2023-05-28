import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Marker } from '../models/model';
import { Subscription } from 'rxjs';
import { GoogleMapsService } from '../services/google-maps.service';
import { Router } from '@angular/router';
import { PlannerService } from '../services/planner.service';

declare const google: any;

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit, OnDestroy  {
  @ViewChild (GoogleMap, { static: false }) map!: GoogleMap;
  // @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  progressBarValue: number = 0;
  progressSub$!: Subscription;

  markers: Marker[] = [];
  selectedPositions: Marker[] = [];
  locationSub$!: Subscription;


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

  constructor (
    private googleMapsSvc: GoogleMapsService,
    private router: Router,
    private plannerSvc: PlannerService) { }

  ngOnInit(): void {

    this.locationSub$ = this.googleMapsSvc.locationSubject.subscribe(
      (data: Marker[]) => {
        this.markers = data;
      }
    )
    this.progressSub$ = this.plannerSvc.progressSub.subscribe(
      (data: number) => {
        this.progressBarValue = data;
      }
    )
  }

  ngOnDestroy(): void {
      this.locationSub$.unsubscribe();
      this.progressSub$.unsubscribe();
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
      this.googleMapsSvc.getNearbyLocations(pos.lat, pos.lng);
      this.router.navigate(['/planner']);
    }
    this.plannerSvc.resetProgress();
  }

  openInfo(marker: MapMarker, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
  }

  calculateDistance() {
    const location1: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
    const location2: google.maps.LatLngLiteral = { lat: 34.0522, lng: -118.2437 };
    const point1 = new google.maps.LatLng(location1);
    const point2 = new google.maps.LatLng(location2);
    let distance: number = 0;
    const calculatedDistance = google.maps.geometry.spherical.computeDistanceBetween(
      point1,
      point2
    );
  }

}
