import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/core/services/CarsService/car.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{


  carsList:any =[]

  constructor(private carService:CarService,
              public appstate:AppstateService,
              private router:Router
  ){}

  ngOnInit(): void {
    this.loadCarsByUser();  
  }

  loadCarsByUser(){
    this.carService.getCarsByUser(this.appstate.AuthState.userId,0).subscribe({
      next:data=>{
          console.log(data);
          this.carsList= data.content;
      },
      error:err=>{
          console.log(err);
      }
    })
  }


  HandleUpdateCar(carId: any) {
    this.router.navigateByUrl(`/dashboard/update-car/${carId}`);
  }

  HandleUpdateAvailability(carId: any) {
    this.carService.updateCarAvailability(carId);
    this.loadCarsByUser();
  }



}
