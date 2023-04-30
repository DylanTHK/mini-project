import { Component } from '@angular/core';
import { faFacebook, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // faFacebook = faFacebook;
  faFacebook = faSquareFacebook;
}
