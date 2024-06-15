import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginGroup!:FormGroup<any>;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router
  ){}


  ngOnInit(): void {
    this.loginGroup = this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  HandleLogin(){
    console.log(this.loginGroup.value)
    this.authService.login(this.loginGroup.value).subscribe({
      next:data=>{
        console.log(data);
        this.authService.setToken(data.accessToken, data.role);
        if(data.role=='STORE_OWNER'){
         
        }
        this.router.navigateByUrl(`/`);
      },
      error:err=>{
        console.log(err.error);
      }   
    })
  }

}
