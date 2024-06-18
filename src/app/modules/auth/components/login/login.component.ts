import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/auth.service';
import { StoreService } from 'src/app/core/services/StoreService/store.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginGroup!:FormGroup<any>;
  Error!:string

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router,
              private storeService:StoreService,
              private appstate:AppstateService
  ){}


  ngOnInit(): void {
    this.loginGroup = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  HandleLogin(){
      this.authService.login(this.loginGroup.value).subscribe({
        next:data=>{
          this.authService.setToken(data.accessToken, data.role);
          if (data.role=='STORE_OWNER') {
            this.authService.getUsernameFromToken();
            this.storeService.getByUsrId(this.appstate.AuthState.userId).subscribe({
                next:data=>{
                  console.log(data);
                    if (!data.configured) {
                     this.router.navigateByUrl(`configuration/${data.owner.username}`);
                  } else {
                    this.router.navigateByUrl(`/`);
                  }
                }
            })
          } else {
          this.router.navigateByUrl(`/`);
          }
          
        },
        error:err=>{
          console.log(err.error);
          this.Error=err.error;
          
  
        }   
      })
    
  }

}
