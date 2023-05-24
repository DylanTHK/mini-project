import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Marker, ScheduledData, UserInfo, Workout, WorkoutData } from 'src/app/models/model';
import { PlannerService } from 'src/app/services/planner.service';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  added!: boolean;
  addScheduledWorkoutsSub$!: Subscription;

  markers: Marker[] = [];
  workouts: WorkoutData[] = [];
  dateTimeForm!: FormGroup;
  sets: number = 0;

  constructor(private fb: FormBuilder,
    private plannerSvc: PlannerService,
    private router: Router,
    private repoSvc: RepoService) { }

  ngOnInit(): void {
      // const location = JSON.parse(sessionStorage.getItem("location") || '{}') as Marker;
      const locationJson = sessionStorage.getItem("location");
      const workoutJson = sessionStorage.getItem("currentWorkouts");

      const location: Marker = locationJson ? JSON.parse(locationJson) : {};
      // console.info(location);
      this.markers.push(location);

      this.workouts = workoutJson ? JSON.parse(workoutJson) : [];
      console.info(this.workouts);
      this.sets = Number(sessionStorage.getItem("currentSets")) ? Number(sessionStorage.getItem("currentSets")) : 0;


      // initialise form
      this.dateTimeForm = this.fb.group({
        date: this.fb.control("2023-11-01"),
        time: this.fb.control("10:00")
      })
      
  }

  ngOnDestroy(): void {
    
  }

  // Sends scheduled data to SB
  submitWorkoutData() {
    this.increaseProgressBar();
    const locJson = sessionStorage.getItem("location");
    const userJson = sessionStorage.getItem("user");
    const marker: Marker = locJson ? JSON.parse(locJson) : {};
    const user: UserInfo = userJson ? JSON.parse(userJson): {};

    const data = {
      workouts: this.workouts,
      sets: this.sets,
      location: marker,
      date: this.dateTimeForm.value.date,
      time: this.dateTimeForm.value.time,
      email: user.info.email
    } as ScheduledData;
    // FIXME: Remove
    console.info(data);
    // console.info("scheduling workout")
    
    this.repoSvc.addScheduledWorkout(data);
    this.resetSession();
    this.router.navigate(['/planner', 'confirm'])
    
  }

  increaseProgressBar() {
    this.plannerSvc.updateProgress(100);
  }

  resetSession() {
    sessionStorage.removeItem("location")
    sessionStorage.removeItem("currentSets")
    sessionStorage.removeItem("currentWorkouts")
  }
}
