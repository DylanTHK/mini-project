import { Injectable } from '@angular/core';
// import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// PURPOSE: for OAuth2 Authorization
// const authCodeFlowConfig: AuthConfig = {
//   // Url of the Identity Provider
//   issuer: 'https://accounts.google.com',
//   // strict discovery document disallows urls which not start with issuers url
//   strictDiscoveryDocumentValidation: false,
//   // URL of the SPA to redirect the user to after login
//   redirectUri: window.location.origin,
//   // The SPA's id. The SPA is registerd with this id at the auth-server, clientId: 'server.code',
//   clientId: '342812509181-47ffafeknlkv659f4l2jibfb6hg7h3rr.apps.googleusercontent.com',
//   // clientId: "spa",
//   // set the scope for the permissions the client should request
//   scope: 'openid profile email https://www.googleapis.com/auth/gmail.readonly',
//   showDebugInformation: true,
// };
export interface UserInfo {
  info: {
    sub: string
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  gmail = 'https://gmail.googleapis.com';

  userProfileSubject = new Subject<UserInfo>();

  constructor(
    // private oAuthService: OAuthService, 
    private readonly httpClient: HttpClient) {
      // FIXME: testing
    //   this.oAuthService.configure(authCodeFlowConfig);
    //   this.oAuthService.loadDiscoveryDocument().then( () => {
    //     console.info("in loadDiscoveryDocument");
    //   this.oAuthService.tryLoginImplicitFlow().then( () => {
    //     if (!this.oAuthService.hasValidAccessToken()) {
    //       this.oAuthService.initLoginFlow();
    //     } else {
    //       this.oAuthService.loadUserProfile().then( (userProfile) => {
    //         this.userProfileSubject.next(userProfile as UserInfo);
    //       })
    //     }
    //   })
    // });
    // this.oAuthService.configure(authCodeFlowConfig);
    // this.oAuthService.loadDiscoveryDocumentAndTryLogin();

    }

  oauthFlow() {
    //  // configure oauth2 service
    // this.oAuthService.configure(authCodeFlowConfig);
 
    // // loading the discovery document from google, which contains all relevant URL for
    // // the OAuth flow, e.g. login url
    // this.oAuthService.loadDiscoveryDocument().then( () => {
    //   console.info("in loadDiscoveryDocument");
    //   // This method just tries to parse the token(s) within the url when
    //   // the auth-server redirects the user back to the web-app
    //   // It doesn't send the user the the login page
    //   this.oAuthService.tryLoginImplicitFlow().then( () => {

    //     // when not logged in, redirecvt to google for login
    //     // else load user profile
    //     if (!this.oAuthService.hasValidAccessToken()) {
    //       this.oAuthService.initLoginFlow();
    //     } else {
    //       this.oAuthService.loadUserProfile().then( (userProfile) => {
    //         this.userProfileSubject.next(userProfile as UserInfo);
    //       })
    //     }
    //   })
    // });
    // FIXME: testing
  //   this.oAuthService.initLoginFlow();
  }

  // emails(userId: string): Observable<any> {
  //   return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages`, { headers: this.authHeader() })
  // }

  // getMail(userId: string, mailId: string): Observable<any> {
  //   return this.httpClient.get(`${this.gmail}/gmail/v1/users/${userId}/messages/${mailId}`, { headers: this.authHeader() })
  // }

  // isLoggedIn(): boolean {
  //   return this.oAuthService.hasValidAccessToken()
  // }

  // signOut() {
  //   // manually configure a logout url, because googles discovery document does not provide it]
  //   this.oAuthService.logoutUrl = "https://www.google.com/accounts/Logout";
  //   this.oAuthService.logOut()
  // }

  // private authHeader() : HttpHeaders {
  //   return new HttpHeaders ({
  //     'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
  //   })
  // }
}
