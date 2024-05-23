import { Component } from '@angular/core';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isHidden=true;

  constructor(public appstate:AppstateService){}

  public navLinks=[
    {path:'home', name:'Home'},
    {path:'stores' , name:'Stores'},
    {path:'cars' , name:'Cars'}
  ]

  handleHidden() {
   this.isHidden = false;
  }

  handleHiddenTrue() {
    this.isHidden = true;
   }

}
