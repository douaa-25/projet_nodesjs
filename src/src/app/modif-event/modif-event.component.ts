import { Component } from '@angular/core';
import { Evenement } from '../models/evenement';
import { EvenementService } from '../service/evenement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Categorie } from '../models/categorie';
import { CategorieService } from '../service/categorie.service';


@Component({
  selector: 'app-modif-event',
  imports: [FormsModule,CommonModule],
  templateUrl: './modif-event.component.html',
  styleUrl: './modif-event.component.css'
})
export class ModifEventComponent {
  event : Evenement =new Evenement('','',new Date(),'','',0,'',0,0);
  cat : Categorie[]=[];

  constructor(public evenServ :EvenementService, public catServ :CategorieService, public router :Router, public route : ActivatedRoute){
    this.route.params.subscribe(params =>{
      const idEvent = params["idEvent"];
      if (idEvent){
        this.evenServ.getEvent(idEvent).subscribe({
          next : data =>{
            this.event.idEvent=data.idEvent;
            this.event.titre=data.titre;
            this.event.descriptions=data.descriptions;
            this.event.date_E=data.date_E;
            this.event.lieu=data.lieu;
            this.event.image=data.image;
            this.event.prix_Billet=data.prix_Billet
            this.event.statut=data.statut;
            this.event.codeC=data.codeC;
            this.event.idOrg=data.idOrg;
          },
          error : err => console.error(err)
        })
      }
      this.catServ.getAllCat().subscribe(data =>{
          this.cat=data;
      })
    })
  }

  enregistrer(){
    this.evenServ.updateEvent(this.event.idEvent,this.event).subscribe(
      ()=> this.router.navigate(['/org/event/',this.event.idOrg,'org'])
    )
  }

}
