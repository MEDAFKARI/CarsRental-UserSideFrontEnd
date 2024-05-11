import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const API_URL = `${environment.API_URL}/stores`;

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) { }

  getAllStores():Observable<any>{
    return this.http.get(`${API_URL}/get`);
  }

  getStore(storeId:number):Observable<any>{
    return this.http.get(`${API_URL}/get/${storeId}`);
  }



}
