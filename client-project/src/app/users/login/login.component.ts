import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  invalidAccount: boolean = false;

  constructor(private fb: FormBuilder) { };


  ngOnInit(): void {
      this.loginForm = this.fb.group(
        {
          email: this.fb.control("", [Validators.required, Validators.email]),
          password: this.fb.control("", [Validators.required]),
          rememberMe: [false]
        }
      )
  }

  onSubmit() {
    console.info("submitting form");
    // if (this.loginForm.invalid) {
      
    //   return;
    // }
    // if valid, continue with SB login Process

    
  }

}
