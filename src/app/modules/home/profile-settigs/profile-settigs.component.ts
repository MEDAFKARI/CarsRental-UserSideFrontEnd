import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/core/services/AccountService/account.service';
import { AppstateService } from 'src/app/core/services/state/appstate.service';

@Component({
  selector: 'app-profile-settigs',
  templateUrl: './profile-settigs.component.html',
  styleUrls: ['./profile-settigs.component.css']
})
export class ProfileSettigsComponent implements OnInit {

onProfilePictureChange($event: Event) {
throw new Error('Method not implemented.');
}
updateProfile() {
throw new Error('Method not implemented.');
}

  userInformations!:any;

  attachment?: File;

  constructor(public appstate:AppstateService,
              private accountService:AccountService
  ){  }


  ngOnInit(): void {
    this.LoadUserInformations();
  }


  LoadUserInformations(){
      this.accountService.getUserInformations(this.appstate.AuthState.userId).subscribe({
          next:data=>{
            console.log(data);
              this.userInformations= data;
          },
          error:err=>{
              console.log(err);
          }
      })
  }


  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file: File = inputElement.files[0];
      this.attachment = file;

    }
  }

  changeProfile() {
    if (this.attachment!=undefined) {
      this.accountService.changeProfilePicture(this.userInformations.username, this.attachment).subscribe(
        next => {
          console.log("Profile changed");
          this.LoadUserInformations();
          this.attachment = undefined;
        },
        error => {
          console.log(error);
        }
      )

    }
  }





}
