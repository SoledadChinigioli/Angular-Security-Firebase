import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {auth} from 'firebase';
import {TokenService} from '../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private fAuth: FirebaseService, private tService: TokenService, private router: Router) { }

  ngOnInit(): void {

  }

  login(email: string, password: string){
    this.fAuth.login(email, password).then(async (result)=>{
      await result.user.getIdToken().then((data)=>{
        this.tService.setFirebaseToken(data);
        this.router.navigate(['/home']);
      })
    }).catch((error)=>{
      this.error = error.message;
    })
  }

  loginWithGoogle(){
    this.fAuth.loginWithGoogle(new auth.GoogleAuthProvider()).then(async (result)=>{
      await result.user.getIdToken().then((data)=>{
        this.tService.setFirebaseToken(data);
        this.router.navigate(['/home']);
      })
    }).catch((error)=>{
      this.error = error.message;
    })
  }

}
