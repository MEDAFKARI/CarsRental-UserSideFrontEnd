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

export const routes: Routes = [

  {path:"", redirectTo:"home", pathMatch:"full"},

  {path:"", component:LayoutComponent, children:[
    {path:"home", component:AccueilComponent},
    {path:"cars", component:CarsSectionComponent},
    {path:"stores", component:StoreSectionComponent},
    {path:"car/:id", component:CarOverviewComponent},
    {path:"store/:id", component:StoreOverviewComponent}
  ]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent}
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
