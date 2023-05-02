import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { LocationService } from '../services/location.service';
import { RedMarkers } from '../models/model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  
  @ViewChild (GoogleMap, { static: false }) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  markers: any[] = [
    {
       position : { 
        lat: 1.3307814648011242, 
        lng: 103.92155279882815,
       },
       options: {
          icon : {url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
       }
      
    },
    {
      position : { 
        "lat": 1.327520776206237,
        "lng": 103.93837561376955
      },
      options: {
         icon : {url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
      }
     
   },
   {
      position : { 
        "lat": 1.343824175967113,
        "lng": 103.93391241796877
      },
      options: {
        icon : {url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}
      }
    }
  ];

  selectedPositions: any[] = [];

  infoContent = "";

  zoom = 13;
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

  constructor(private locationSvc: LocationService) { }

  ngOnInit(): void {
    // TODO: subscribe here
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
        options: {
          icon : {url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
        }
      });
      
    }

    // this.addMarkers(this.selectedPositions[0]);
    
  }
  
  // Method to make http call and 
  addMarkers(loc: google.maps.LatLngLiteral) {
    // TODO: use selectedLocation to make API call (find nearby fitness corners)
    const locations = this.locationSvc.getLocations();

    console.info(locations);
  }

  openInfo(marker: MapMarker) {
    // this.infoContent = content;
    this.infoWindow.open(marker)
  }

  
}
