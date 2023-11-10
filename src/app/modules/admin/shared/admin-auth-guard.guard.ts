import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../../../shared/user.service";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardGuard implements CanActivate {

  constructor(private authService: UserService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoggedIn = this.authService.IsLoggedIn();
    const role = localStorage.getItem('role1');

    if (isLoggedIn && role === 'Admin') {
     // this.router.navigate(['/admin']);
      return true;
    } else if(isLoggedIn && role !== 'Admin'){

      this.router.navigate(["/project"]);
      return false ;
    }
    this.router.navigate(["/auth/login"])

    return false;
  }

}
