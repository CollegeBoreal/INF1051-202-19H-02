import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from '../admin/admin/admin.component';
import {AuthGuard} from './auth.guard';
import {AdminDashboardComponent} from '../admin/admin-dashboard/admin-dashboard.component';
import {ManageHeroesComponent} from '../admin/manage-heroes/manage-heroes.component';
import {ManageCrisesComponent} from '../admin/manage-crises/manage-crises.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
