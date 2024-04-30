import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AccueilComponent } from './modules/home/accueil/accueil.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LayoutComponent } from './modules/home/layout/layout.component';
import { CarsSectionComponent } from './modules/home/cars-section/cars-section.component';

export const routes: Routes = [

  {path:"", redirectTo:"home", pathMatch:"full"},

  {path:"", component:LayoutComponent, children:[
    {path:"home", component:AccueilComponent},
    {path:"cars", component:CarsSectionComponent},
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
