import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public appstate:AppstateService,
              private router:Router
  ){}



  HandleLogout() {
    localStorage.clear();
    this.appstate.setAuthState({
      userId:'',
      role:'',
      isAuthenticated:false
    })
    this.router.navigateByUrl(`/`)
    }
  
HandleCloseNav() {
throw new Error('Method not implemented.');
}

}
