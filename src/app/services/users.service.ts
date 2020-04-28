import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenService} from './token.service';
import {ApiToken} from '../models/ApiToken';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = 'http://localhost:8080';

  constructor(private http: HttpClient, private tService: TokenService) {

  }

  getAllUsers(){
    let headers = new Headers();
    headers.append('Authorization', this.tService.getApiToken());
    return this.http.get<User[]>('http://localhost:8080/users', {
      headers: new HttpHeaders({
        'Authorization': this.tService.getApiToken()
      })
    })
  }

}
