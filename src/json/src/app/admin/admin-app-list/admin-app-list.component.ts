import { Component } from '@angular/core';
import { Application } from '../../models/application';
import { IntranetService } from '../../services/intranet.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-admin-app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-app-list.component.html',
  styleUrl: './admin-app-list.component.css'
})
export class AdminAppListComponent {
  apps : Application[]=[];

  constructor(public appService : IntranetService, public authService : AuthentificationService, public router : Router){
    this.appService.getAllApp().subscribe(
      data=>{this.apps=data;}
    )
  }

  disableApp(id : number){
      this.appService.UpdateStatus(id!,'INACTIVE').subscribe(
      ()=>{
        alert("Application désactivée");

        this.appService.getAllApp().subscribe(
        data => {
          this.apps = data;
        });
      }
    )
  }

  ActiveApp(id : number){
      this.appService.UpdateStatus(id!,'ACTIVE').subscribe(
      ()=>{
        alert("Application activée");

        this.appService.getAllApp().subscribe(
        data => {
          this.apps = data;
        });
      }
    )
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/admin/login']);
  }

}