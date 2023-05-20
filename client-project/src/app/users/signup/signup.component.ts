import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUserDetails } from 'src/app/models/model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  created: boolean = false;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private userSvc: UserService) { };

  ngOnInit(): void {
    // TODO: add subscription to update created status

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      // FIXME: add email validator
      email: ['', [Validators.required]], //, Validators.email
      // TODO: add password requirements (regex)
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  // Handle form submission logic here
  onSubmit(): void {
    if (this.signupForm.valid) {
      // Perform form submission actions
      const p = this.signupForm.get('password')?.value;
      const cp = this.signupForm.get('confirmPassword')?.value;
      console.info(this.signupForm.value);
      console.info(this.signupForm.value["name"]);
      if (p === cp) {
        const details: AddUserDetails = {
          name: this.signupForm.value["name"],
          email: this.signupForm.value["email"],
          password: this.signupForm.value["password"]
        }
        // send form details 
        this.userSvc.addUser(details);
      }
    }
    // navigate to home
    // TODO: check if creation successful
    this.router.navigate(['/login']);
  }

}
