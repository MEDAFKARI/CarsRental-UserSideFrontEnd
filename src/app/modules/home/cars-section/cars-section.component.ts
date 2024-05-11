import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarBody } from 'src/app/core/Models/CarBody';
import { BrandService } from 'src/app/core/services/BrandService/brand.service';
import { CarService } from 'src/app/core/services/CarsService/car.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-cars-section',
  templateUrl: './cars-section.component.html',
  styleUrls: ['./cars-section.component.css']
})
export class CarsSectionComponent implements OnInit {


  kw:string ="";
  brands:any = [];

  bodyType= Object.keys(CarBody).filter(k => isNaN(Number(k)));;

  constructor(private carSrvc:CarService,
    private brandService:BrandService,
      private router:Router,
      public appstate:AppstateService
  ){}

  ngOnInit(): void {
    this.getAllCars();
    this.getAllBrands();
  }

  getAllCars(kw:string="",page:number=0){
      this.carSrvc.getCars(kw,page).subscribe({
        next:(data)=>{
            this.appstate.setCarState({
              totalPages:data.totalPages,
              totalElements:data.totalElements,
              offset:data.pageable.offset,
              number:data.numberOfElements,
              pageSize:data.size,
              carsList:data.content,
              status:"LOADED",
            })
            console.log(this.appstate);
        },
        error:(err)=>{
            console.log(err);
        }
      })
  }

  getAllBrands(){
    this.brandService.getBrands().subscribe({
      next:(data)=>{
          this.brands =data.content;
      },
      error:(err)=>{
          console.log(err);
      }
    })
}


HandleBrandFilter(brandId: any) {
  console.log(brandId);
  this.carSrvc.getCarsByBrand(brandId).subscribe({
    next:(data)=>{
      console.log(data)
      this.appstate.setCarState({
        totalPages:data.totalPages,
        totalElements:data.totalElements,
        offset:data.pageable.offset,
        number:data.numberOfElements,
        pageSize:data.size,
        carsList:data.content,
        status:"LOADED",
      })
      console.log(this.appstate);
    },
    error:(err)=>{
        console.log(err);
    }
  })
}


  handleSearch() {
    this.getAllCars(this.appstate.CarsState.kw);
  }
    
  HandleGetSingleCar(carId: number) {
   this.router.navigateByUrl(`/car/${carId}`);
  }


  HandleBodyFilter(bodyType: string) {
    this.carSrvc.getCarsByBody(bodyType,0).subscribe({
      next:(data)=>{
        this.appstate.setCarState({
          totalPages:data.totalPages,
          totalElements:data.totalElements,
          offset:data.pageable.offset,
          number:data.numberOfElements,
          pageSize:data.size,
          carsList:data.content,
          status:"LOADED",
        })
        console.log(this.appstate);
      },
      error:(err)=>{
          console.log(err);
      }
    })
  }


  HandlePagination(pageNumber: number) {
    console.log(pageNumber)
    this.appstate.setCarState({
      currentPage:pageNumber
    })
  }


}
