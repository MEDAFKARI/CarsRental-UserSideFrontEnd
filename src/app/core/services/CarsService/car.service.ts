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

  getCars():Observable<any>{
    return this.http.get(`${URL}/get`);
  }

  getSingleCar(carId:number):Observable<any>{
    return this.http.get(`${URL}/get/${carId}`);
  }


}
