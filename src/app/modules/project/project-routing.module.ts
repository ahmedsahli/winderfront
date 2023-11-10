import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { PostProjectComponent } from './components/post-project/post-project.component';
import { ReclamationUserComponent } from './components/reclamation-user/reclamation-user.component';
import { ListeReclamationComponent } from './components/liste-reclamation/liste-reclamation.component';
import { DetailsReclamationFComponent } from './components/details-reclamation-f/details-reclamation-f.component';
import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { UserPaymentComponent } from './components/user-payment/user-payment.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  },
  {
    path: 'post-project',
    component: PostProjectComponent
  },
  {
    path: 'reclamation',
    component: ReclamationUserComponent
  },
  { path: 'reclamations', component: ListeReclamationComponent },
  { path: 'reclamationDetails/:id', component: DetailsReclamationFComponent },
  {
    path: 'user-projects',
    component: UserProjectsComponent
  },
  {
    path: 'pay-user',
    component: UserPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
