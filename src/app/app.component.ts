import {Component} from '@angular/core';
import {TokenService} from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebaseAuthDemo';

  constructor(private tService: TokenService) {
  }

  checkTokens(): boolean{
    if (this.tService.getFirebaseToken() != undefined){
      return true;
    }
    return false;
  }

}
