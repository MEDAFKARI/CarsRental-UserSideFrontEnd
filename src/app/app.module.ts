import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './modules/home/accueil/accueil.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './modules/home/layout/layout.component';
import { CarsSectionComponent } from './modules/home/cars-section/cars-section.component';
import { HomeCarsSecComponent } from './modules/home/home-cars-sec/home-cars-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AccueilComponent,
    LayoutComponent,
    CarsSectionComponent,
    HomeCarsSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
