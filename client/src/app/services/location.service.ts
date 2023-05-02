import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
  

  constructor(private httpClient: HttpClient) { }

  getLocations() {
    const notKey = "AIzaSyAake5omU1MJGj9A6SNl3y-MwmjzBbuVRI";
    const keyword = "fitness corner";
    const radius = 500;
    const location = "1.332326 103.936659";

    const params = new HttpParams().set("keyword", keyword)
      .set("radius", radius)
      .set("location", location)
      .set("key", notKey)

    return this.httpClient.get<any>(this.url, {params});
  }
}
