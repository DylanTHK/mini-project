import { Component } from '@angular/core';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  constructor(private plannerSvc: PlannerService) { }

  addToCalendar() {
    alert("Redirecting to Google Calendar");
    this.plannerSvc.resetProgress();
  }
}
