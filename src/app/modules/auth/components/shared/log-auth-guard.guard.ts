import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../../../../shared/user.service";

@Injectable({
  providedIn: 'root'
})
export class LogAuthGuardGuard implements CanActivate {
  constructor(private authService: UserService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');


    if(token == null)
    {
      return true;
    }
    this.router.navigate(["/project"]);
    return false;
  }

}
