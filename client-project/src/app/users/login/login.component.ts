import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Alert, LoginDetails } from 'src/app/models/model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  alerts: Alert[] = [];
  alertSub = new Subscription();

  loginForm!: FormGroup;
  invalidAccount: boolean = false;

  constructor(private fb: FormBuilder,
    private userSvc: UserService) { 
    this.reset();
  };


  ngOnInit(): void {
      this.loginForm = this.fb.group(
        {
          // FIXME: add email validation for submission
          email: this.fb.control("", [Validators.required]), //, Validators.email
          password: this.fb.control("", [Validators.required]),
          rememberMe: [false]
        }
      );
      this.alertSub = this.userSvc.newAlert.subscribe(
        data => {
          this.alerts.push(data);
        }
      )
  }

  ngOnDestroy(): void {
      
  }

  onSubmit() {
    // console.info("submitting form");
    if (!this.loginForm.invalid) {
      // console.info(this.loginForm.value as LoginDetails);
      this.userSvc.loginUser(this.loginForm.value as LoginDetails);
    }
    // if valid, continue with SB login Process
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
		this.alerts = [];
	}

}
