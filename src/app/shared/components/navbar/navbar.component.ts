import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/AccountService/account.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  isHidden=true;
  userInformations!:any;

  constructor(public appstate:AppstateService,
        private router:Router,
        private accountService:AccountService
  ){}

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.appstate.AuthState);
    this.LoadUserInformations();
  }

  ngOnInit(): void {
    this.LoadUserInformations();    
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


    LoadUserInformations(){
      this.accountService.getUserInformations(this.appstate.AuthState.userId).subscribe({
          next:data=>{
            console.log(data);
              this.userInformations= data;
          },
          error:err=>{
              console.log(err);
          }
      })
  }

}
