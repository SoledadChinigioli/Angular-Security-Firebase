import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/User';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private uService: UsersService, private tService: TokenService) {

  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.tService.reGenerateApiToken().subscribe((data)=>{
      this.tService.setApiToken(data.access_token);
      this.uService.getAllUsers().subscribe((data)=>{
        this.users = data;
      })
    });
  }

}
