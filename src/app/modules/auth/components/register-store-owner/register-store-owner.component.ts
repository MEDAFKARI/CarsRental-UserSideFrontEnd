import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/Auth/auth.service';

@Component({
  selector: 'app-register-store-owner',
  templateUrl: './register-store-owner.component.html',
  styleUrls: ['./register-store-owner.component.css']
})
export class RegisterStoreOwnerComponent {
  registerGroup!:FormGroup<any>;

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router
  ){}


  ngOnInit(): void {
    this.registerGroup = this.fb.group({
      username:['', Validators.required],
      email:['',Validators.required],
      password:['', Validators.required]
    })
  }

  HandleRegister(){
    console.log(this.registerGroup.value)
    this.authService.registerStoreOwner(this.registerGroup.value).subscribe({
      next:data=>{
        console.log(data);
        
        this.router.navigateByUrl(`/login`);
      },
      error:err=>{
        console.log(err.error);
      }   
    })
  }

}
