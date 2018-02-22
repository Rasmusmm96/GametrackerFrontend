import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AdminService} from '../services/admin.service';
import {isNullOrUndefined} from 'util';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (AdminService.isAdminLoggedIn()) {
      return true;
    }
  }
}
