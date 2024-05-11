import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const API_URL = `${environment.API_URL}/cities`;


@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  getAllCities():Observable<any>{
    return this.http.get(`${API_URL}/get`)
  }



}
