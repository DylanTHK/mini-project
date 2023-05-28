import { Component } from '@angular/core';
import { ScheduledData, UserInfo } from 'src/app/models/model';
import { EmailService } from 'src/app/services/email.service';
import { PlannerService } from 'src/app/services/planner.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {

  constructor(private plannerSvc: PlannerService,
    private emailSvc: EmailService) { }

  addToCalendar() {
    alert("Redirecting to Google Calendar");
    this.plannerSvc.resetProgress();
  }

  sendEmail() {
    const data: ScheduledData = JSON.parse(sessionStorage.getItem("scheduledData") || "{}");
    this.emailSvc.sendConfirmationEmail(data)
      .then(data => {
        console.info(data);
        alert(data);
      })
      .catch(error => {
        console.info(error.error);
        alert(error.error);
      });
    
  }
}
