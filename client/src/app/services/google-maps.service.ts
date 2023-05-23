import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, firstValueFrom } from 'rxjs';
import { Marker } from '../models/model';

// PURPOSE: to get Google maps data from Angular Google maps api
@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  private url = "/api/fitness";
  
  locationSubject = new Subject<Marker[]>();
  distanceSubject = new Subject<number[]>();
  distances: number[] = [];

  constructor(private httpClient: HttpClient) { }

  getNearbyLocations(lat: number, lng: number) {
    const radius = 500;
    const location = lat + " " + lng;

    const params = new HttpParams()
      .set("radius", radius)
      .set("location", location)

    firstValueFrom(this.httpClient.get<Marker[]>(this.url, {params}))
      .then((data: Marker[]) => {
        console.info(data);
        this.locationSubject.next(data);

        const reference: google.maps.LatLngLiteral = { lat: lat, lng: lng };
        this.distances = [];
        data.forEach(marker => {
          const distance: number = this.calculateDistance(reference, marker.position);
          this.distances.push(Math.ceil(distance));
        })
        console.info(this.distances);
        this.distanceSubject.next(this.distances);
      });
  }

  calculateDistance(start: google.maps.LatLngLiteral, end: google.maps.LatLngLiteral ) {
    const point1 = new google.maps.LatLng(start);
    const point2 = new google.maps.LatLng(end);
    let distance: number = 0;
    const calculatedDistance = 
      google.maps.geometry.spherical.computeDistanceBetween(point1, point2);

    console.info(calculatedDistance);
    return calculatedDistance;
  }
}


