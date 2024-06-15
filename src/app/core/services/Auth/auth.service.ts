import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AppstateService } from '../state/appstate.service';
import { jwtDecode } from 'jwt-decode';

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
    return this.http.post(`${API_URL}/signup`,registerReq);
  }

  registerStoreOwner(registerReq:any):Observable<any>{
    return this.http.post(`${API_URL}/signup/storeOwner`,registerReq);
  }


  setToken(token:string, role:string){
    const tokenString:string = JSON.stringify( token );
    localStorage.setItem('token', tokenString);
    localStorage.setItem('role',role);
    this.appstate.setAuthState({
      isAuthenticated:true,
      role:role,
    })
    this.getUsernameFromToken();
  }
  
    getToken(): string | null{
        let token = localStorage.getItem( 'token' );
        if( token !=null){
            token = JSON.parse(token);
      }
      return token;
    }

    getRole(): string | null{
      let role = localStorage.getItem( 'role' );
      console.log(role);
      if( role !=null){
          role = role;
    }
    return role;
  }

    getUsernameFromToken() {
      const token = this.getToken();
      if (token) {
          const decodedToken = jwtDecode(token); 
          this.appstate.setAuthState({
            userId:decodedToken.sub
          }) 
      } 
    }





}

