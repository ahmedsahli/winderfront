import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReclamationDetailsComponent } from './reclamation-details/reclamation-details.component';
import { BadwordRecComponent } from './badword-rec/badword-rec.component';
import { AddBadwordRecComponent } from './add-badword-rec/add-badword-rec.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ListTestComponent } from '../test/test-admin/components/list-test/list-test.component';
import { PostTestComponent } from '../test/test-admin/components/post-test/post-test.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'meetings',
        component: MeetingsComponent
      },
      {
        path: 'projects-list',
        component: ProjectListComponent
      },
      {
        path: 'users-list',
        component: UsersListComponent
      },
      {
        path: 'users-pie',
        component: PieChartComponent
      },
      {
        path: 'reclamation',
        component: ReclamationComponent
      },
      {
        path: 'badword-rec',
        component: BadwordRecComponent
      },
      { path: 'admin/add-badword-rec', component: AddBadwordRecComponent },
      {
        path: 'list-test',
        component: ListTestComponent
      },
      {
        path: 'add-test',
        component: PostTestComponent
      },

      {
        path: 'reclamations/:idRec',
        component: ReclamationDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
