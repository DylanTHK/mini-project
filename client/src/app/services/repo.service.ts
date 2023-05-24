import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marker, ScheduledData, Workout } from '../models/model';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  private standardWorkoutUrl = "/api/workouts/standard";
  private addScheduledWorkoutUrl = "/api/workouts/add-workout";


  workoutSub = new Subject<Workout[]>();
  scheduledWorkoutSub = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  // TODO: (DOING) add saved location (post)
  addScheduledWorkout(data: ScheduledData) {
    console.info("Sending data to SB");
    this.httpClient.post<boolean>(this.addScheduledWorkoutUrl, data).subscribe(
      data => {
        console.info(data);
      }
    )
  }

  // TODO: add saved location (post)
  getScheduledWorkoutByEmail(email: string) {
    // this.httpClient.post()

  }

  // TODO: add saved location (post)
  addSavedLocationByEmail(location: Marker) {
  }

  getSavedLocationByEmail(email: string) {

  }

  getStandardWorkout() {
    this.httpClient.get<Workout[]>(this.standardWorkoutUrl)
      .subscribe(data => {
        console.info(data);
        this.workoutSub.next(data);
      })
  }
}
