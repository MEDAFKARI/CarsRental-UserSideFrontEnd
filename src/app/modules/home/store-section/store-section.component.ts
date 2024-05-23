import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from 'src/app/core/services/CityService/city.service';
import { StoreService } from 'src/app/core/services/StoreService/store.service';

@Component({
  selector: 'app-store-section',
  templateUrl: './store-section.component.html',
  styleUrls: ['./store-section.component.css']
})
export class StoreSectionComponent implements OnInit {

  constructor(private storeService:StoreService,
      private cityService:CityService,
      private router:Router
  ){}
 
  stores:any =[]
  cities:any =[]

  ngOnInit(): void {
    this.loadStore();
    this.loadCityFilter();
  }

  loadStore(){
      this.storeService.getAllStores().subscribe({
        next:data=>{
          console.log(data);
          this.stores=data.content;
        },
        error:err=>{
          console.log(err);
        }
      })
  }


  loadCityFilter(){
    this.cityService.getAllCities().subscribe({
      next:data=>{
        console.log(data);
        this.cities=data.content;
      },
      error:err=>{
        console.log(err);
      }
    })
}


handleSearch() {
throw new Error('Method not implemented.');
}

HandleGetStore(storeId: number) {
  this.router.navigateByUrl(`/store/${storeId}`);
}

HandleCityFilter(cityId:number) {
  console.log(cityId);
  this.storeService.getByCity(cityId).subscribe({
    next:data=>{
      console.log(data);
        this.stores = data;
    },
    error:err=>{
      console.log(err);
    }
  })
}

HandleReset() {
  this.loadStore();
}

}
