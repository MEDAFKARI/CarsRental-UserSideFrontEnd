import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden=true;

  constructor(public appstate:AppstateService,
        private router:Router
  ){}

  ngOnInit(): void {
    console.log(this.appstate.AuthState);
  }

  public navLinks=[
    {path:'home', name:'Home'},
    {path:'stores' , name:'Stores'},
    {path:'cars' , name:'Cars'}
  ]

  handleHidden() {
   this.isHidden = false;
  }

  handleHiddenTrue() {
    this.isHidden = true;
   }


   HandleLogout() {
    localStorage.clear();
    this.appstate.setAuthState({
      userId:'',
      role:'',
      isAuthenticated:false
    })
    this.router.navigateByUrl(`/`);
    }

}
