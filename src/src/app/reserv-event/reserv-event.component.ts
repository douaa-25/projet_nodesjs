import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ReservationService } from '../service/reservation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EvenementService } from '../service/evenement.service';
import { Evenement } from '../models/evenement';

@Component({
  selector: 'app-reserv-event',
  imports: [FormsModule, CommonModule],
  templateUrl: './reserv-event.component.html',
  styleUrl: './reserv-event.component.css'
})
export class ReservEventComponent {
  reservation= new Reservation(new Date(), 1, 'En attente',0,0);

  event!: Evenement;
  idEvent!: number;
  idPar!: number;
  prixTotal: number = 0;

  constructor(public route: ActivatedRoute,public eventServ: EvenementService, public ResServ : ReservationService, public auth: AuthService, public router: Router) {
    this.route.params.subscribe(params => {
      this.idEvent = params['idEvent'];

      if(this.auth.userConnect){
        this.idPar = this.auth.userConnect.id;
      }
      this.infoEvent();
    });
  }

  infoEvent(){
     this.eventServ.getEvent(this.idEvent).subscribe(data => {
        this.event = data;
        this.calculPrix();
    });
  }

  calculPrix(){
    this.prixTotal = this.reservation.nbPlace * this.event.prix_Billet;
  }

  ajouterReservation(){
    const data ={dateR: new Date(), nbPlace: this.reservation.nbPlace, status_R: "En attente"};
    this.ResServ.createEvent(this.idPar, this.idEvent, data).subscribe({
      next : () => {
        alert("Reservation envoyée");
        this.router.navigate(['/particip']);
      },
      error: (err) => console.log(err)
    })
  }

}