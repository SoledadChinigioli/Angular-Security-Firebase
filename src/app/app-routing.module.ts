import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CanActivateViaAuthGuard} from './guards/can-activate-via-auth.guard';
import {CanActivateLoginGuard} from './guards/can-activate-login.guard';
import {UsersComponent} from './home/users/users.component';


const routes: Routes = [
  { component: LoginComponent, path: '', canActivate: [CanActivateLoginGuard] },
  { component: LoginComponent, path: 'login', canActivate: [CanActivateLoginGuard] },
  { component: HomeComponent, path: 'home', canActivate: [CanActivateViaAuthGuard] },
  { component: UsersComponent, path: 'home/users', canActivate: [CanActivateViaAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
