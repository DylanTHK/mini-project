import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddUserDetails, Alert } from 'src/app/models/model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit, OnDestroy{

  // created: boolean = false;
  // statusSub$!: Subscription;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private userSvc: UserService) { 

    };

  ngOnInit(): void {

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnDestroy(): void {
  }

  // Handle form submission logic here
  onSubmit(): void {
    if (this.signupForm.valid) {
      // Perform form submission actions
      const p = this.signupForm.get('password')?.value;
      const cp = this.signupForm.get('confirmPassword')?.value;

      if (p === cp) {
        const details: AddUserDetails = {
          name: this.signupForm.value["name"],
          email: this.signupForm.value["email"],
          password: this.signupForm.value["password"]
        }
        // send form details 
        this.userSvc.addUser(details);
        this.router.navigate(['/login']);
      }
    }
  }

}
