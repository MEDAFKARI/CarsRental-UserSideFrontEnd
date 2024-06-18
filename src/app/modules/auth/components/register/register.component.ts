import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerGroup!:FormGroup<any>;
  Error!:String;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router
  ){
    this.registerGroup = this.fb.group({
      username:['', Validators.required],
      email:['',        Validators.required],
      password:['', Validators.required]
    })
  }


  ngOnInit(): void {
    
  }
  

  HandleRegister(){
      this.authService.register(this.registerGroup.value).subscribe({
        next:data=>{
  
            this.router.navigateByUrl(`/login`);
  
        },
        error:err=>{
          console.log(err.error);
        }   
      })
    }
}
