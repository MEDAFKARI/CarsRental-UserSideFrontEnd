import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const URL = `${environment.API_URL}/cars`

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http:HttpClient) { }

  getCars(kw:string, page:number):Observable<any>{
    return this.http.get(`${URL}/get?search=${kw}&page=${page}`);
  }

  getSingleCar(carId:number):Observable<any>{
    return this.http.get(`${URL}/get/${carId}`);
  }

  getCarsByStore(storeId:number):Observable<any>{
    return this.http.get(`${URL}/getByStore/${storeId}`);
  }

  getCarsByBrand(brandId:number):Observable<any>{
    return this.http.get(`${URL}/getByBrand/${brandId}`);
  }

  getCarsByBody(Body:string, page:number):Observable<any>{
    return this.http.get(`${URL}/getByBody?body=${Body}&page=${page}`);
  }


}
