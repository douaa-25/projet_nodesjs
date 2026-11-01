import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { Categorie } from '../models/categorie';
import { Evenement } from '../models/evenement';
import { EvenementService } from '../service/evenement.service';
import { CategorieService } from '../service/categorie.service';


@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  events: Evenement[] = [];
    categories: Categorie[] = [];
  
  constructor(public auth: AuthService, public eventService: EvenementService, public catService: CategorieService) {
    this.eventService.getAcceptEvent().subscribe(data => {
      console.log("EVENTS:", data);
      this.events = data;
    });
  
    this.catService.getAllCat().subscribe(data => {
      this.categories = data;
    });
  }
}