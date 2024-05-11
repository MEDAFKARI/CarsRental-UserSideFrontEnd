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
import { StoreSectionComponent } from './modules/home/store-section/store-section.component';
import { CarOverviewComponent } from './modules/home/car-overview/car-overview.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreOverviewComponent } from './modules/home/store-overview/store-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AccueilComponent,
    LayoutComponent,
    CarsSectionComponent,
    HomeCarsSecComponent,
    StoreSectionComponent,
    CarOverviewComponent,
    FooterComponent,
    StoreOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
