import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  progressBarValue = 0;
  progressSub = new Subject<number>();

  constructor() { }

  updateProgress(value: number) {
    this.progressBarValue = value;
    this.progressSub.next(this.progressBarValue);
  }

  resetProgress() {
    this.progressBarValue = 0;
    this.progressSub.next(this.progressBarValue);
  }
}
