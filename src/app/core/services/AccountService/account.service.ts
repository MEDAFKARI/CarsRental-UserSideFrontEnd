import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

var URL= `${environment.API_URL}/users`;

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  getUserInformations(userId:string):Observable<any> {
    return this.http.get(`${URL}/getUserInformations/${userId}`);
  }

  changeProfilePicture(userId:string, attachment:File):Observable<any> {
    const formData: FormData = new FormData();
    formData.append('attachment',attachment);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.put(`${URL}/updateProfilePic/${userId}`,formData,{headers:headers});
  }


}
