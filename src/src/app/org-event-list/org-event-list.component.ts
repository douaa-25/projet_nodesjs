import { Component } from '@angular/core';
import { Evenement } from '../models/evenement';
import { EvenementService } from '../service/evenement.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Categorie } from '../models/categorie';
import { CategorieService } from '../service/categorie.service';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-org-event-list',
  imports: [RouterLink,CommonModule, FormsModule],
  templateUrl: './org-event-list.component.html',
  styleUrl: './org-event-list.component.css'
})
export class OrgEventListComponent {
  reserv : Reservation[]=[];
  events : Evenement[]=[];
  cat : Categorie[]=[];
  id! : number; 
  idRes!: number;
  idEvent! : number;
  constructor(public eventServ : EvenementService, public ResServ: ReservationService ,public catServ : CategorieService, public route :ActivatedRoute){
    this.route.params.subscribe(params => {
      this.id = params['idOrg'];
        this.eventServ.getEventOrg(this.id).subscribe(data =>{
          this.events=data;
          console.log(data);
          for(let e of this.events){
              this.ResServ.getResEvent(e.idEvent).subscribe(data1=>{
              this.reserv.push(...data1);
            })
          }
        });
        this.catServ.getAllCat().subscribe(data =>{
          this.cat=data;
        });
    });
  }

  suppEvent(id :number){
    if (confirm('Tu veux supprimer cet evenement ?')){
      this.eventServ.deleteEvent(id).subscribe(
        ()=>{alert('Evenement supprimé ');
      })
    }
  }

  changerS(idRes: number, nouveauStatut: string) {
    this.ResServ.updateReservStatus(idRes, nouveauStatut).subscribe({
      next: (res) => {
        alert("Statut modifié avec succès !");
        console.log(res);
      },
      error: (err) => {
        console.error(err);
        alert("Erreur lors de la modification");
      }
    });
  }

  }
