import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent
} from '@nebular/auth';
import {AuthGuard} from './@auth/auth.guard';

const routes: Routes = [
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule', canActivate: [AuthGuard]},
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      }
    ],
  },
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' },
];

// https://angular.io/guide/router#appendix-locationstrategy-and-browser-url-styles
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
