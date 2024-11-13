import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

type ProfileType = {
  businessPhones?: string,
  displayName?: string,
  givenName?: string,
  jobTitle?: string,
  mail?: string,
  mobilePhone?: string,
  officeLocation?: string,
  preferredLanguage?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: []
})
export class ProfileComponent implements OnInit {
  profile: ProfileType | undefined;
  tokenExpiration!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProfile(environment.apiConfig.uri);

    this.tokenExpiration = localStorage.getItem('tokenExpiration')!;
  }

// , {
//   headers: new HttpHeaders({
//   'Authorization': `Bearer ${this.getAccessToken()}`,
//   'Content-Type': 'application/json'
// })
//
// }
  getProfile(url: string) {
    this.http.get(url).subscribe((profile) => {
      this.profile = profile;
    });
  }

  private getAccessToken(): string {
    // Get token from your auth service or localStorage
    // return localStorage.getItem('msal.token') || '';
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjNQYUs0RWZ5Qk5RdTNDdGpZc2EzWW1oUTVFMCIsImtpZCI6IjNQYUs0RWZ5Qk5RdTNDdGpZc2EzWW1oUTVFMCJ9';
  }
}
