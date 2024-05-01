import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public navLinks=[
    {path:'home', name:'Home'},
    {path:'stores' , name:'Stores'},
    {path:'cars' , name:'Cars'}
  ]

}
