import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AccueilComponent } from './modules/home/accueil/accueil.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LayoutComponent } from './modules/home/layout/layout.component';
import { CarsSectionComponent } from './modules/home/cars-section/cars-section.component';
import { StoreSectionComponent } from './modules/home/store-section/store-section.component';
import { CarOverviewComponent } from './modules/home/car-overview/car-overview.component';
import { StoreOverviewComponent } from './modules/home/store-overview/store-overview.component';
import { DashboardComponent } from './modules/storeOwner/dashboard/dashboard.component';
import { CarsListComponent } from './modules/storeOwner/cars-list/cars-list.component';
import { DashboardContentComponent } from './modules/storeOwner/dashboard-content/dashboard-content.component';
import { NewCarComponent } from './modules/storeOwner/new-car/new-car.component';
import { RegisterStoreOwnerComponent } from './modules/auth/components/register-store-owner/register-store-owner.component';
import { UpdateCarComponent } from './modules/storeOwner/update-car/update-car.component';
import { AuthorizationGuard } from './core/guards/authorization.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { StoreConfigurationComponent } from './modules/storeOwner/store-configuration/store-configuration.component';

export const routes: Routes = [

  {path:"", redirectTo:"home", pathMatch:"full"},

  {path:"", component:LayoutComponent, children:[
    {path:"home", component:AccueilComponent},
    {path:"cars", component:CarsSectionComponent},
    {path:"stores", component:StoreSectionComponent},
    {path:"car/:id", component:CarOverviewComponent},
    {path:"store/:id", component:StoreOverviewComponent}
  ]},


  {path:"dashboard", canActivate:[AuthorizationGuard] ,component:DashboardComponent, children:[
    {path:"", component:DashboardContentComponent},
    {path:"cars", component:CarsListComponent},
    {path:"new-car", component:NewCarComponent},
    {path:"update-car/:id", component:UpdateCarComponent},
    {path:"car/:id", component:CarOverviewComponent},
    {path:"store/:id", component:StoreOverviewComponent}
  ]},




  {path:"login", canActivate:[AuthenticatedGuard], component:LoginComponent},
  {path:"register", canActivate:[AuthenticatedGuard], component:RegisterComponent},
  {path:"StoreOwnerRegister", canActivate:[AuthenticatedGuard], component:RegisterStoreOwnerComponent},
  {path:"configuration/:id", component:StoreConfigurationComponent}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
