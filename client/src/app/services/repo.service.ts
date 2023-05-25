import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marker, ScheduledData, UserInfo, Workout } from '../models/model';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private standardWorkoutUrl = "/api/workouts/standard";
  private addScheduledWorkoutUrl = "/api/workouts/add-workout";
  private addSavedLocationUrl = "/api/workouts/add-location";


  workoutSub = new Subject<Workout[]>();
  scheduledWorkoutSub = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  // add schedule workout to Mongo (linked with email)
  addScheduledWorkout(data: ScheduledData) {
    console.info("Sending data to SB");
    this.httpClient.post<boolean>(this.addScheduledWorkoutUrl, data).subscribe(
      data => {
        console.info(data);
      }
    )
  }

  // TODO: get all scheduled workouts for user (email)
  getScheduledWorkoutByEmail(email: string) {
    // this.httpClient.get()

  }

  // FIXME: add saved location (post)
  addSavedLocationByEmail(location: Marker, email: string) {
    // add email to params
    const params = new HttpParams()
      .set("email", email); 

    this.httpClient.post(this.addSavedLocationUrl, location, {params}).subscribe(
      response => {
        console.info(response);
      }
    )
    // make post request with url, params and body
    

  }
  getSavedLocationByEmail(email: string) {

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
