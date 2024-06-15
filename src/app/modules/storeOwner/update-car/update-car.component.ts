import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarBody } from 'src/app/core/Models/CarBody';
import { CarService } from 'src/app/core/services/CarsService/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  car:any ={}
  carId!:number
  carFormGroup!:FormGroup

  constructor(private carSrvc:CarService,
    private route:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder
  ){
    this.carFormGroup = this.fb.group({
      carModel :[''],
      price: [''],
      body:[''],
      doors:[''],
      fuel:[''],
      transmission:['']

    })
  }

  ngOnInit(): void {
    this.carId = this.route.snapshot.params['id'];
    this.getCarInformations();
    
  }



  getCarInformations(){
      this.carSrvc.getSingleCar(this.carId).subscribe({
        next:data=>{
          console.log(data);
            this.car =data;
            this.carFormGroup = this.fb.group({
              carModel :[this.car.carModel],
              price: [this.car.price],
              body:[this.car.body],
              doors:[this.car.doors],
              fuel:[this.car.fuel],
              transmission:[this.car.transmission]
        
            })
        },
        error:err=>{
          console.log(err);
        }
      })
  }


  HandleUpdateCar() {
    this.carSrvc.updateCar(this.carId,this.carFormGroup.value).subscribe({
      next:data=>{
        console.log(data);
        this.router.navigateByUrl(`/dashboard/cars`);
      },
      error:err=>{
        console.log(err);
      }
    })
  }
    



}
