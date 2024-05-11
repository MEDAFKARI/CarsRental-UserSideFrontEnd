import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const URL = `${environment.API_URL}/brands`


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http:HttpClient) { }

  getBrands():Observable<any>{
    return this.http.get(`${URL}/get`);
  }




}
