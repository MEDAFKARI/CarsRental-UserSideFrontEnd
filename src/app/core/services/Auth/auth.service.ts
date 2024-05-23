import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AppstateService } from '../state/appstate.service';

const API_URL = `${environment.API_URL}/auth`;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,
              private appstate:AppstateService
  ) { }

  login(loginReq:any):Observable<any>{
      return this.http.post(`${API_URL}/signin`,loginReq);
  }


  register(registerReq:any):Observable<any>{
    return this.http.post(`${API_URL}/signin`,registerReq);
  }


  setToken(token:string){
    const tokenString:string = JSON.stringify( token );
    localStorage.setItem('token', tokenString);
    this.appstate.setAuthState({
      isAuthenticated:true
    })
  }
  
    getToken(): string | null{
        let token = localStorage.getItem( 'token' );
        if( token !=null){
            token = JSON.parse(token);
      }
      return token;
    }





}
