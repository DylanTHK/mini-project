import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marker, ScheduledData, UserInfo, Workout } from '../models/model';
import { Observable, Subject, firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private standardWorkoutUrl = "/api/workouts/standard";
  private addScheduledWorkoutUrl = "/api/workouts/add-workout";
  private addSavedLocationUrl = "/api/workouts/add-location";
  private getAllSavedLocationUrl = "/api/workouts/all-locations";
  private getAllScheduledWorkoutsUrl = "/api/workouts/all-workouts";

  workoutSub = new Subject<Workout[]>();
  savedLocationsSub = new Subject<Marker[]>();
  scheduledWorkoutSub = new Subject<boolean>();
  allScheduledWorkoutsSub = new Subject<ScheduledData[]>();

  constructor(private httpClient: HttpClient) { }

  // add schedule workout to Mongo (linked with email)
  addScheduledWorkout(data: ScheduledData) {
    console.info("Sending data to SB");
    return firstValueFrom(this.httpClient.post<boolean>(this.addScheduledWorkoutUrl, data));
  }

  // TODO: get all scheduled workouts for user (email) - Link to Statistics
  getAllScheduledWorkoutsByEmail(email: string) {
    const params = new HttpParams().set("email", email); 
    this.httpClient.get<ScheduledData[]>(this.getAllScheduledWorkoutsUrl, {params})
      .subscribe(data => {
        console.info(data)
        this.allScheduledWorkoutsSub.next(data);
      });
  }

  // add saved location (post)
  addSavedLocationByEmail(location: Marker, email: string) {
    // add email to params
    const params = new HttpParams()
      .set("email", email); 

    return firstValueFrom(this.httpClient.post(this.addSavedLocationUrl, location, {params, responseType: 'text'}));
  }

  // get ALL saved locations
  getSavedLocationByEmail(email: string) {
    const params = new HttpParams().set("email", email);
    return this.httpClient.get<Marker[]>(this.getAllSavedLocationUrl, {params})
      .subscribe(response => {
        this.savedLocationsSub.next(response);
      });
  }

  // get array of standard workouts from Mongo
  getStandardWorkout() {
    this.httpClient.get<Workout[]>(this.standardWorkoutUrl)
      .subscribe(data => {
        console.info(data);
        this.workoutSub.next(data);
      })
  }
}
