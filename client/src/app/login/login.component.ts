import { Component } from '@angular/core';
import { faFacebook, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { GoogleApiService } from '../services/google-api.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // faFacebook = faFacebook;
  faFacebook = faSquareFacebook;

  constructor(private oauthService: OAuthService, private googleApi: GoogleApiService) { }


  loginWithGoogle() {
    console.info("Logging in with Google");
    this.googleApi.oauthFlow();
  }
}
