import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, OnSameUrlNavigation, Route, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/AccountService/account.service';
import { CityService } from 'src/app/core/services/CityService/city.service';
import { StoreService } from 'src/app/core/services/StoreService/store.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-store-configuration',
  templateUrl: './store-configuration.component.html',
  styleUrls: ['./store-configuration.component.css']
})
export class StoreConfigurationComponent implements OnInit {

  userId!:string

  storeId!:any

  storeConfiguration!:FormGroup

  attachment?: File;

  cityList:any=[]

  userInformations!:any;


  constructor(private fb:FormBuilder,
    private storeService:StoreService,
    private cityService:CityService,
    private router:Router,
    private route:ActivatedRoute,
    public appstate:AppstateService,
    private accountService:AccountService
  ){

  }

  ngOnInit(): void {
    this.storeConfiguration = this.fb.group({
      storeName:['',Validators.required],
      storeNumber:['',Validators.required],
      city:['',Validators.required]
    })
    this.userId = this.route.snapshot.params['id'];
    this.getStoreByUserId();
    this.LoadCities();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file: File = inputElement.files[0];
      this.attachment = file;

    }
  }

  getStoreByUserId(){
    this.storeService.getByUsrId(this.userId).subscribe({
      next:data=>{
        console.log(data);
        this.storeId = data.id;
        this.storeConfiguration = this.fb.group({
          storeName:[data.storeName],
          storeNumber:[data.storeNumber],
          city:[]
        })  
      }
    })
  }


  LoadCities(){
    this.cityService.getAllCities().subscribe({
      next:data=>{
        this.cityList = data.content;
      },
      error:err=>{
        console.log(err);
      }
    })
  }


  HandleConfigureStore(){
    if(this.attachment != undefined && this.storeConfiguration.valid==true) {
      console.log(this.storeId);
      this.storeService.ConfigureStore(this.storeId,this.storeConfiguration, this.attachment).subscribe({
          next:data=>{
            console.log(data);
            this.router.navigateByUrl(`/dashboard`)
          },
          error:err=>{
            console.log(err);
          }
      })
    }
    else{
      console.log("Invalid");
    }
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
