import { Component, OnDestroy, OnInit } from '@angular/core';
import { RepoService } from '../services/repo.service';
import { Workout } from '../models/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit, OnDestroy {

  standardWorkouts: Workout[] = [];
  workoutSub$!: Subscription;

  constructor(private repoSvc: RepoService) { };

  ngOnInit(): void {
      this.workoutSub$ = this.repoSvc.workoutSub.subscribe(
        (data: Workout[]) => {
          this.standardWorkouts = data;
        }
      )
      if (this.standardWorkouts.length <= 0) {
        this.repoSvc.getStandardWorkout();
      }
  }

  ngOnDestroy(): void {
      this.workoutSub$.unsubscribe();
  }
}
