import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppstateService } from '../state/appstate.service';
import { FormGroup } from '@angular/forms';



const URL = `${environment.API_URL}/cars`

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient,
    private appstate:AppstateService
  ) { }

  getCars(kw:string, page:number):Observable<any>{
    return this.http.get(`${URL}/get?search=${kw}&page=${page}`);
  }

  getSingleCar(carId:number):Observable<any>{
    return this.http.get(`${URL}/get/${carId}`);
  }

  getCarsByStore(storeId:number):Observable<any>{
    return this.http.get(`${URL}/getByStore/${storeId}`);
  }

  getCarsByBrand(brandId:number, page:number):Observable<any>{
    return this.http.get(`${URL}/getByBrand?brand=${brandId}&page=${page}`);
  }

  getCarsByBody(Body:string, page:number):Observable<any>{
    return this.http.get(`${URL}/getByBody?body=${Body}&page=${page}`);
  }

  getCarsByUser(userId:string,page:number):Observable<any>{
    return this.http.get(`${URL}/getByUser?id=${userId}&page=${page}`);
  }

  AddCar(car:FormGroup,file:File):Observable<any>{
    console.log(this.appstate.AuthState.userId);
    const formData: FormData = new FormData();
    formData.append('carModel', car.value.carModel);
    formData.append('price', car.value.price);
    formData.append('brand', car.value.brand);
    formData.append('body', car.value.body);
    formData.append('availability', car.value.availability);
    formData.append('doors', car.value.doors);
    formData.append('transmission', car.value.transmission);
    formData.append('fuel', car.value.fuel);
    formData.append('attachment', file);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(`${URL}/add/${this.appstate.AuthState.userId}`,formData,{headers:headers});
  }

  updateCarAvailability(carId:number):Observable<any>{
    return this.http.put(`${URL}/updateAvailability?id=${carId}`,{});
  }


}
