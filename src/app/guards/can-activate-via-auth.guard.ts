import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {TokenService} from '../services/token.service';
import {NavbarComponent} from '../navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private tService: TokenService, private router: Router) {}

  canActivate() {
    if(this.tService.getFirebaseToken() == undefined){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }


}
