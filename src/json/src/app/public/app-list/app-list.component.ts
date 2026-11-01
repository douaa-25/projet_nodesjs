import { Component } from '@angular/core';
import { IntranetService } from '../../services/intranet.service';
import { Application } from '../../models/application';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.css'
})
export class AppListComponent {
  apps: Application[] = [];
  constructor(public appService: IntranetService){
    this.appService.getAllAppAct().subscribe(
      data=>{this.apps=data}
    )
  }

}
