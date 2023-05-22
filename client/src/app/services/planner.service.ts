import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlannerService {

  progressBarValue = 0;
  progressSub = new Subject<number>();

  constructor() { }

  increaseProgress() {
    const increment = 33.33;
    if (this.progressBarValue < 100) this.progressBarValue += increment;
    if (this.progressBarValue === 99.99) this.progressBarValue = 100;

    this.progressSub.next(this.progressBarValue);
  }

  resetProgress() {
    this.progressBarValue = 0;
    this.progressSub.next(this.progressBarValue);
  }
}
