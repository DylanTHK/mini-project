import { Component } from '@angular/core';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  faFacebook = faSquareFacebook;
}
