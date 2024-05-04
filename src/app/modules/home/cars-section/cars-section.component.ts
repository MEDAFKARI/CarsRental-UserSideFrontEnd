import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/core/services/CarsService/car.service';

@Component({
  selector: 'app-cars-section',
  templateUrl: './cars-section.component.html',
  styleUrls: ['./cars-section.component.css']
})
export class CarsSectionComponent implements OnInit {

  cars:any = [];

  constructor(private carSrvc:CarService,
      private router:Router
  ){}

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars(){
      this.carSrvc.getCars().subscribe({
        next:(data)=>{
            this.cars =data;
        },
        error:(err)=>{
            console.log(err);
        }
      })
  }


  HandleGetSingleCar(carId: number) {
   this.router.navigateByUrl(`/car/${carId}`);
  }



}
