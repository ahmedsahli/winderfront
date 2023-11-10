import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {LogAuthGuardGuard} from "./components/shared/log-auth-guard.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LogAuthGuardGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[LogAuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
