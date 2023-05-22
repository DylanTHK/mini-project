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

  constructor(private httpClient: HttpClient) { }

  getNearbyLocations(lat: number, lng: number) {
    const radius = 500;
    const location = lat + " " + lng;

    const params = new HttpParams()
      .set("radius", radius)
      .set("location", location)

    firstValueFrom(this.httpClient.get<Marker[]>(this.url, {params}))
      .then(data => {
        console.info(data);
        this.locationSubject.next(data);
      });
  }
}


