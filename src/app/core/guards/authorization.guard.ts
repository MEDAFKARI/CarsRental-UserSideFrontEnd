import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppstateService } from '../services/state/appstate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(public appstate:AppstateService,
              public router:Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.appstate.AuthState.role=='ADMIN' || this.appstate.AuthState.role=='STORE_OWNER' ){
        return true;
      }else{
        this.router.navigateByUrl('/')
        return false;   
      }
  }
  
}
