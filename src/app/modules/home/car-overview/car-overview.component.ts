import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/core/services/CarsService/car.service';

@Component({
  selector: 'app-car-overview',
  templateUrl: './car-overview.component.html',
  styleUrls: ['./car-overview.component.css']
})
export class CarOverviewComponent implements OnInit {


  car:any ={}
  carId!:number

  constructor(private carSrvc:CarService,
    private route:ActivatedRoute,
    private router:Router
  ){}

  ngOnInit(): void {
    this.carId = this.route.snapshot.params['id'];
    this.getCarInformations();
  }



  getCarInformations(){
      this.carSrvc.getSingleCar(this.carId).subscribe({
        next:data=>{
          console.log(data);
            this.car =data;
        },
        error:err=>{
          console.log(err);
        }
      })
  }


  HandleStorePage(storeId: number) {
    this.router.navigateByUrl(`/store/${storeId}`);
  }





}
