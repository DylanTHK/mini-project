import { Component, OnDestroy, OnInit } from '@angular/core';
import { RepoService } from '../services/repo.service';
import { ScheduledData, UserInfo } from '../models/model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  allScheduledWorkouts: ScheduledData[] = [];
  thisWeekSchedule: ScheduledData[] = [];
  nextWeekSchedule: ScheduledData[] = [];
  pastWeekSchedule: ScheduledData[] = [];
  thisMonthSchedule: ScheduledData[] = [];
  schduledWorkoutSub$!: Subscription;

  constructor(private repoSvc: RepoService) { }

  ngOnInit(): void {
    const user: UserInfo = JSON.parse(sessionStorage.getItem("user") || '{}');
    const email = user.info.email;
    console.info(email);
    this.schduledWorkoutSub$ = this.repoSvc.allScheduledWorkoutsSub
      .subscribe( workouts => {
        this.allScheduledWorkouts = workouts;
        this.sortWorkouts(workouts);
      })
    this.repoSvc.getAllScheduledWorkoutsByEmail(email);

  }

  ngOnDestroy(): void {
      
  }

  // this week (Saturday - Friday)
  sortWorkouts(allWorkouts: ScheduledData[]) {
    const today = new Date();
    const currentWeek = this.getWeekNumber(today);
    const currentMonth = new Date().getMonth();

    allWorkouts.forEach((item) => {
      const itemDate = new Date(item.date);
      const monthNum = itemDate.getMonth();
      const weekNum = this.getWeekNumber(itemDate);

      // For month statistic
      if (monthNum === currentMonth) {
        this.thisMonthSchedule.push(item);
      }
      // Sort into 3 different arrays
      if (weekNum === currentWeek) {
        this.thisWeekSchedule.push(item);
      } else if (weekNum > currentWeek) {
        this.nextWeekSchedule.push(item);
      } else {
        this.pastWeekSchedule.push(item);
      }
    });

  }

  getWeekNumber(date: Date): number {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const millisecondsInDay = 86400000;
    return Math.ceil(((date.valueOf() - oneJan.valueOf()) / millisecondsInDay + oneJan.getDay() + 1) / 7);
  }
}
