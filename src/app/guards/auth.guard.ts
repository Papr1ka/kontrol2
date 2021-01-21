import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MockService } from '../services/mock.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service : MockService, private router : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }
  
  private checkLogin() : boolean{
    console.log("запрос на вход")
    console.log(this.service.logged)
    if (this.service.isLogged()){
      return true;
    }
    alert("вы не можете войти")
    this.router.navigate(['/login'])
    return false;
  }

}
