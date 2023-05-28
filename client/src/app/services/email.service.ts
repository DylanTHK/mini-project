import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailData, ScheduledData } from '../models/model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private postEmailUrl: string = "/api/email/confirmation"

  constructor(private httpClient: HttpClient) { }

  sendConfirmationEmail(data: ScheduledData) {
    const body: EmailData = {
      "subject": "Workout Schedule Confirmation",
      "date": data.date.toString(),
      "time": data.time.toString(),
      "location": data.location.name
    }
    const receiver: string = data.email;
    const params = new HttpParams().set("receiver", receiver);
    return firstValueFrom(
      this.httpClient.post(this.postEmailUrl, body, {params, responseType: 'text'})
      );
  }
}
