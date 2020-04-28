import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateLoginGuard implements CanActivate {

  constructor(private tService: TokenService, private router: Router) {}

  canActivate() {
    if(this.tService.getFirebaseToken() != undefined ){
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }

}
