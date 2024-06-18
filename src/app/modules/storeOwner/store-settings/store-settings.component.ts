import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CityService } from 'src/app/core/services/CityService/city.service';
import { StoreService } from 'src/app/core/services/StoreService/store.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-store-settings',
  templateUrl: './store-settings.component.html',
  styleUrls: ['./store-settings.component.css']
})
export class StoreSettingsComponent implements OnInit {

  storeInfos!:any

  storeUpdateSettings!:FormGroup

  attachment?: File;

  storeId!:any

  cityList:any=[]

  Success!:String;


  constructor(
    private fb:FormBuilder,
    private appstate:AppstateService,
    private storeService:StoreService,
    private cityService:CityService,
    private router:Router,

  ){

  }

  ngOnInit(): void {
    this.storeUpdateSettings= this.fb.group({
      storeName:[''],
      city:[''],
      storeNumber:['']

    })
    this.loadStoreInfos();
    this.LoadCities();
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


  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file: File = inputElement.files[0];
      this.attachment = file;

    }
  }

  changeStoreLogo(){
    if(this.attachment != undefined) {
      console.log(this.storeId);
      console.log("Store Logo changed");
      this.storeService.updateStoreLogo(this.storeId, this.attachment).subscribe({
          next:data=>{
            this.loadStoreInfos();
            this.attachment = undefined;  
            this.Success = "Store Logo changed";
          },
          error:err=>{
            console.log(err);
          }
      })
    }

  }

  


  loadStoreInfos(){
    this.storeService.getByUsrId(this.appstate.AuthState.userId).subscribe({
        next:data=>{
          console.log(data);
            this.storeInfos= data;
            this.storeId = this.storeInfos.id;
            this.storeUpdateSettings= this.fb.group({
              storeName:[this.storeInfos.storeName],
              city:[this.storeInfos.city.id],
              storeNumber:[this.storeInfos.storeNumber]
            })
            console.log(this.storeUpdateSettings.value);
        },
        error:err=>{
          console.log(err);
        }
    })
  }


  changeStoreInformations(){
      console.log(this.storeUpdateSettings.value)
      this.storeService.updateStoreInfos(this.storeId, this.storeUpdateSettings).subscribe({
        next:data=>{
          console.log(data);  
          this.loadStoreInfos();
          this.Success = "Store Informations changed";
        },
        error:err=>{
          console.log(err);
        }
      })
  }

}
