import {Component, OnInit } from '@angular/core';
import {TokenService} from '../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  active: boolean = true;

  constructor(private tService: TokenService, private router: Router) {

  }

  ngOnInit(): void {

  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
