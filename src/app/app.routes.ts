import { Routes } from '@angular/router';
import { FailedComponent } from './components/failed/failed.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard],
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login-failed',
    component: FailedComponent,
  },
];
