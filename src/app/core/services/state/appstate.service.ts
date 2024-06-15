import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {
  CarsState:any={
    totalPages:0,
    totalElements:0,
    offset:0,
    number:0,
    pageSize:5,
    currentPage:0,
    keyword: "",
    carsList:[],
    status:"LOADING",
    brandId: '',
    bodyType:'',
  }


  isLoading:Boolean = false;


  public LoadingOff(){
    this.isLoading=false;
  }

  public LoadingOn(){
    this.isLoading=true;
  }

  UsersState:any={
    users:[]
  }

  AuthState:any={
    userId:'',
    role:'',
    isAuthenticated:false,
  }

  public setAuthState(state:any){
    this.AuthState={...this.AuthState, ...state}
  }

  public setUsers(state:any){
    this.UsersState={...this.UsersState, ...state}
  }

  public setCarState(state:any){
      this.CarsState = {...this.CarsState, ...state}
  }


}

