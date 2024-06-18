import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/core/services/CarsService/car.service';
import { StoreService } from 'src/app/core/services/StoreService/store.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {

  storeInfos!:any

  carsList=[];
  AvailableCars=[];


  constructor(private appstate:AppstateService,
              private storeService:StoreService,
              private carService:CarService
  ){

  }

  ngOnInit(): void {
    this.loadStoreInfos();

  }


  loadStoreInfos(){
      this.storeService.getByUsrId(this.appstate.AuthState.userId).subscribe({
          next:data=>{
            console.log(data);
              this.storeInfos= data;
              this.carService.getCarsByStore(this.storeInfos.id).subscribe({
                    next:data=>{
                      this.carsList = data.content;
                      this.AvailableCars = this.carsList.filter((car: any) => car.availability);
                    }
              })
          },
          error:err=>{
            console.log(err);
          }
      })
  }



}
