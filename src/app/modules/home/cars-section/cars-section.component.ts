import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
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

  kw: string = "";
  brands: any = [];
  bodyType = Object.keys(CarBody).filter(k => isNaN(Number(k)));

  constructor(private carSrvc: CarService,
    private brandService: BrandService,
    private router: Router,
    public appstate: AppstateService
  ) {}

  ngOnInit(): void {
    this.getAllCars();
    this.getAllBrands();
  }


  @ViewChildren('brandInput') brandInputs!: QueryList<any>;

  getAllCars(kw: string = "") {
    this.carSrvc.getCars(kw, this.appstate.CarsState.currentPage).subscribe({
      next: (data) => {
        this.appstate.setCarState({
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          offset: data.pageable.offset,
          number: data.numberOfElements,
          pageSize: data.size,
          carsList: data.content,
          status: "LOADED",
          keyword: kw,
        });
        console.log(this.appstate);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getAllBrands() {
    this.brandService.getBrands().subscribe({
      next: (data) => {
        this.brands = data.content;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  HandleBrandFilter(brandId: any,currentPage:number=0) {
    this.carSrvc.getCarsByBrand(brandId, currentPage).subscribe({
      next: (data) => {
        console.log(data);
        this.appstate.setCarState({
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          offset: data.pageable.offset,
          number: data.numberOfElements,
          pageSize: data.size,
          carsList: data.content,
          status: "LOADED",
          brandId:brandId,
          bodyType:''
        });
        console.log(this.appstate);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  handleSearch() {
    this.getAllCars(this.kw);
  }

  HandleGetSingleCar(carId: number) {
    this.router.navigateByUrl(`/car/${carId}`);
  }

  HandleBodyFilter(bodyType: string,currentPage:number=0) {
    this.carSrvc.getCarsByBody(bodyType, currentPage).subscribe({
      next: (data) => {
        this.appstate.setCarState({
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          offset: data.pageable.offset,
          number: data.numberOfElements,
          pageSize: data.size,
          carsList: data.content,
          status: "LOADED",
          brandId:'',
          bodyType: bodyType,
        });
        console.log(this.appstate);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  HandlePagination(pageNumber: number) {
    console.log(pageNumber);
    this.appstate.setCarState({
      currentPage: pageNumber
    });
    if(this.appstate.CarsState.bodyType =='' && this.appstate.CarsState.brandId==''){
      console.log("Fuck this");
      this.getAllCars(this.kw);
    }
    if(this.appstate.CarsState.bodyType !='' && this.appstate.CarsState.brandId==''){
      console.log("Body Filter");

      this.HandleBodyFilter(this.appstate.CarsState.bodyType, this.appstate.CarsState.currentPage);
    }
    if(this.appstate.CarsState.bodyType =='' && this.appstate.CarsState.brandId!=''){
      console.log("Brand Filter");

      this.HandleBrandFilter(this.appstate.CarsState.brandId, this.appstate.CarsState.currentPage);
    }
  }


  HandleReset() {
    this.getAllCars();
    this.brandInputs.forEach(input => input.nativeElement.checked = false);
  }

}
