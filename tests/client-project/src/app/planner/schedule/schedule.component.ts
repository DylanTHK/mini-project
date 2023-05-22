import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Marker } from 'src/app/models/model';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  markers: Marker[] = [];
  scheduleForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private plannerSvc: PlannerService,
    private router: Router) { }

  ngOnInit(): void {
      // const location = JSON.parse(sessionStorage.getItem("location") || '{}') as Marker;
      const locationJson = sessionStorage.getItem("location");
      const location: Marker = locationJson ? JSON.parse(locationJson) : {};
      console.info(location);
      this.markers.push(location);

      // initialise form
      this.scheduleForm = this.fb.group({
        date: this.fb.control(""),
        time: this.fb.control("")
      })
      
  }

  ngOnDestroy(): void {
      
  }

  submitSchedule() {
    console.info("scheduling workout")
    this.router.navigate(['/planner', 'confirm'])
    this.increaseProgressBar();
  }

  increaseProgressBar() {
    console.info("increasing")
    this.plannerSvc.increaseProgress();
  }
}
