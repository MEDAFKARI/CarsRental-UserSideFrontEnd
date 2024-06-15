import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandService } from 'src/app/core/services/BrandService/brand.service';
import { CarService } from 'src/app/core/services/CarsService/car.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})

export class NewCarComponent implements OnInit {

  CarForm!:FormGroup;

  attachment?: File;

  brandList:any=[]


  constructor(private fb:FormBuilder,
    private carService:CarService,
    private brandService:BrandService
  ){

  }
  ngOnInit(): void {
    this.CarForm = this.fb.group({
      carModel:['', Validators.required],
      price:['', Validators.required],
      brand:[null, Validators.required],
      body:['', Validators.required],
      availability:['', Validators.required],
      doors: ['', Validators.required],
      transmission:['', Validators.required],
      fuel:['', Validators.required]
    })

    this.brandService.getBrands().subscribe({
      next:data=>{
        console.log(data);
          this.brandList=data.content;
      },
      error:err=>{
          console.log("Error");
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


HandleAddCar() {
  if(this.attachment != undefined) {
    this.carService.AddCar(this.CarForm, this.attachment).subscribe({
        next:data=>{
          console.log(data);
        },
        error:err=>{
          console.log(err);
        }
    })}
}

}
