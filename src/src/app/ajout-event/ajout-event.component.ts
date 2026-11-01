import { Component } from '@angular/core';
import { Evenement } from '../models/evenement';
import { EvenementService } from '../service/evenement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../models/categorie';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajout-event',
  imports: [CommonModule,FormsModule],
  templateUrl: './ajout-event.component.html',
  styleUrl: './ajout-event.component.css'
})
export class AjoutEventComponent {
  cat : Categorie[]=[];
  id! : number;

  titre: string = '';
  descriptions: string = '';
  date_E: string = '';
  lieu: string = '';
  image: string = '';
  prix_Billet : number=0;
  statut : string ="En attend";
  codeC : number = 0;
  idOrg : number =0 ;

  constructor(public eventServ : EvenementService, public catServ : CategorieService, public router : Router, public route : ActivatedRoute){
    this.route.params.subscribe(params => {
      this.id = params['idOrg'];
      this.catServ.getAllCat().subscribe(data =>{
        this.cat=data;
      })
    })
  }

  ajouter(){
    this.idOrg = this.id;
    this.eventServ.createEvent(this.id,{titre :this.titre, descriptions :this.descriptions, date_E : this.date_E, lieu : this.lieu, image: this.image, prix_Billet: this.prix_Billet, statut : this.statut, codeC:this.codeC, idOrg : this.idOrg}).subscribe({
      next : () =>{
        alert("Event ajouté avec succés");
        this.router.navigate(['/org/event',this.id,'org']);
      },
      error : () =>{
        alert("Erreur lors de l'ajout");
      }
    })

  }


}
