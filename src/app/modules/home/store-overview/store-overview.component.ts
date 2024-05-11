import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/core/services/CarsService/car.service';
import { StoreService } from 'src/app/core/services/StoreService/store.service';

@Component({
  selector: 'app-store-overview',
  templateUrl: './store-overview.component.html',
  styleUrls: ['./store-overview.component.css']
})
export class StoreOverviewComponent implements OnInit {

  cars:any = []
  storeId!:number;
  store:any =[]

  constructor(private carService:CarService,
    private storeService:StoreService,
    private router:ActivatedRoute,
    private rtr:Router

  ){}

  ngOnInit(): void {
    this.storeId = this.router.snapshot.params['id'];
    this.getStore();
    this.getCars();
  }





  HandleGetSingleCar(arg: number) {
      this.rtr.navigateByUrl(`car/${arg}`)
  }

  getStore(){
    this.storeService.getStore(this.storeId).subscribe({
      next:data=>{
        this.store = data;
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  getCars(){
    this.carService.getCarsByStore(this.storeId).subscribe({
      next:data=>{
        this.cars= data;
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  
}
