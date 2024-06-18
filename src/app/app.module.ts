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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreOverviewComponent } from './modules/home/store-overview/store-overview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './modules/storeOwner/dashboard/dashboard.component';
import { SidebarComponent } from './modules/storeOwner/sidebar/sidebar.component';
import { CarsListComponent } from './modules/storeOwner/cars-list/cars-list.component';
import { DashboardContentComponent } from './modules/storeOwner/dashboard-content/dashboard-content.component';
import { NewCarComponent } from './modules/storeOwner/new-car/new-car.component';
import { RegisterStoreOwnerComponent } from './modules/auth/components/register-store-owner/register-store-owner.component';
import { UpdateCarComponent } from './modules/storeOwner/update-car/update-car.component';
import { UpdateStoreComponent } from './modules/storeOwner/update-store/update-store.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { StoreConfigurationComponent } from './modules/storeOwner/store-configuration/store-configuration.component';
import { ProfileSettigsComponent } from './modules/home/profile-settigs/profile-settigs.component';
import { StoreSettingsComponent } from './modules/storeOwner/store-settings/store-settings.component';

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
    StoreOverviewComponent,
    DashboardComponent,
    SidebarComponent,
    CarsListComponent,
    DashboardContentComponent,
    NewCarComponent,
    RegisterStoreOwnerComponent,
    UpdateCarComponent,
    UpdateStoreComponent,
    StoreConfigurationComponent,
    ProfileSettigsComponent,
    StoreSettingsComponent,
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
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
