import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public navLinks=[
    {path:'cars' , name:'Cars'},
    {path:'stores' , name:'Stores'}
  ]

}
