import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Evenement } from '../models/evenement';
import { Categorie } from '../models/categorie';
import { EvenementService } from '../service/evenement.service';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-particip',
  imports: [RouterLink, CommonModule],
  templateUrl: './particip.component.html',
  styleUrl: './particip.component.css'
})
export class ParticipComponent {

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
