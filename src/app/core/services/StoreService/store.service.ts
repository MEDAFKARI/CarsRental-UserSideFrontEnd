import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  getByCity(cityId: number):Observable<any> {
    return this.http.get(`${API_URL}/getByCity/${cityId}`);
  }

  getByUsrId(userId: string):Observable<any> {
    return this.http.get(`${API_URL}/getByUser/${userId}` );
  }

  ConfigureStore(storeId:Number,storeConfiguration: FormGroup, attachment:File):Observable<any> {
    const formData: FormData = new FormData();
    formData.append('storeName', storeConfiguration.value.storeName);
    formData.append('storeNumber', storeConfiguration.value.storeNumber);
    formData.append('city', storeConfiguration.value.city);
    formData.append('attachment', attachment);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.put(`${API_URL}/update/${storeId}`,formData,{headers:headers});
  }

  UpdateStore(){

  }



}
