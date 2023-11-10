import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { ProjectComponent } from './modules/project/project.component';
import { ProjectListComponent } from './modules/project/components/project-list/project-list.component';
import { ReclamationDetailsComponent } from './modules/admin/reclamation-details/reclamation-details.component';
import { AddBadwordRecComponent } from './modules/admin/add-badword-rec/add-badword-rec.component';
import { ListeReclamationComponent } from './modules/project/components/liste-reclamation/liste-reclamation.component';
import { DetailsReclamationFComponent } from './modules/project/components/details-reclamation-f/details-reclamation-f.component';

import { ResetPasswordComponent } from './modules/reset-password/reset-password/reset-password.component';
import { ResetComponent } from './modules/reset/reset/reset.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminAuthGuardGuard } from './modules/admin/shared/admin-auth-guard.guard';
import { ProfileDetailsComponent } from './modules/profile-details/profile-details.component';
import { ProposalfComponent } from './modules/proposal/proposalf/proposalf.component';
import { AddProposalComponent } from './modules/proposal/add-proposal/add-proposal.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'proposalf',
    component: ProposalfComponent
  },
  {
    path: 'add-proposal',
    component: AddProposalComponent
  },
  { path: 'reclamations/:id', component: ReclamationDetailsComponent },
  { path: 'admin/add-badword-rec', component: AddBadwordRecComponent },
  { path: 'reclamations', component: ListeReclamationComponent },
  { path: 'reclamationDetails/:id', component: DetailsReclamationFComponent },

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'reset',
    component: ResetComponent
  },
  {
    path: 'profile-details',
    component: ProfileDetailsComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'project',
    loadChildren: () => import('./modules/project/project.module').then((m) => m.ProjectModule),

    canActivate: [AuthguardGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminAuthGuardGuard]
  },
  {
    path: 'tests',
    loadChildren: () => import('./modules/test/test.module').then((m) => m.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
