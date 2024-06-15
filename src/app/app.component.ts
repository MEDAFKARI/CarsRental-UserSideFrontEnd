import { Component, OnInit } from '@angular/core';
import { AppstateService } from './core/services/state/appstate.service';
import { AuthService } from './core/services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'ClientFrontEnd';
  constructor(private appstate:AppstateService,private authService:AuthService){}


  ngOnInit(): void {
   try {
    if(this.authService.getToken()){
      this.authService.getUsernameFromToken();
      console.log(this.authService.getRole());
      this.appstate.setAuthState({
       role: this.authService.getRole(),
       isAuthenticated:true,
     });
    }
          
    } catch (error) {
      console.error("An error occurred while initializing the app:", error);
    }
  }
}

