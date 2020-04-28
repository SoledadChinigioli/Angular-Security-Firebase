import { Injectable } from '@angular/core';
import {AuthToken} from '../models/AuthToken';
import {ApiToken} from '../models/ApiToken';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  setFirebaseToken(value: string){
    localStorage.setItem('firebaseToken', value);
    this.reGenerateApiToken().subscribe((data)=>{
      this.setApiToken(data.access_token);
    });
  }

  getFirebaseToken(){
    return localStorage.getItem('firebaseToken');
  }

  setApiToken(value: string){
    localStorage.setItem('apiToken', value);
  }

  getApiToken(){
    return localStorage.getItem('apiToken');
  }

  reGenerateApiToken(){
    let authToken: AuthToken = {
      token: this.getFirebaseToken()
    }
    return this.http.post<ApiToken>('http://localhost:8080/token', authToken);
  }

}
