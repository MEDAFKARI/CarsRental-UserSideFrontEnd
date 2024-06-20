import { Component, OnInit } from '@angular/core';
import { AppstateService } from './core/services/state/appstate.service';
import { AuthService } from './core/services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'ClientFrontEnd';
  constructor(private appstate:AppstateService,private authService:AuthService,
              private router:Router
  ){}


  ngOnInit(): void {
   try {
    let token = this.authService.getToken()
    if(token && this.authService.isTokenExpired(token) ){
      this.authService.getUsernameFromToken();
      console.log(this.authService.getRole());
      this.appstate.setAuthState({
       role: this.authService.getRole(),
       isAuthenticated:true,
     });
    }
    else{
      localStorage.clear();
        this.appstate.setAuthState({
          userId:'',
          role:'',
          isAuthenticated:false
        })
        this.router.navigateByUrl(`/`);
    }
          
    } catch (error) {
      console.error("An error occurred while initializing the app:", error);
    }
  }
}

