import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marker, ScheduledData } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private httpClient: HttpClient) { }

  addScheduledWorkout(data: ScheduledData): boolean {
    
    return false;
  }

  // add location (post)
  addSavedLocation(location: Marker) {

  }
}
