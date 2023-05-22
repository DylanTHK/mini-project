import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-select-workout',
  templateUrl: './select-workout.component.html',
  styleUrls: ['./select-workout.component.css']
})
export class SelectWorkoutComponent implements OnInit, OnDestroy{

  constructor(private plannerSvc: PlannerService,
    private router: Router) { }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }

  scheduleWorkouts() {
    this.router.navigate(['/planner', 'schedule']);
    this.increaseProgressBar();
  }

  increaseProgressBar() {
    console.info("increasing")
    this.plannerSvc.increaseProgress();
  }
}
