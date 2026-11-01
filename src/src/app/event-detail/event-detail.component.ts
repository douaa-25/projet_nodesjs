import { Component } from '@angular/core';
import { Evenement } from '../models/evenement';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EvenementService } from '../service/evenement.service';
import { Reservation } from '../models/reservation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Commentaire } from '../models/commentaire';
import { CommentaireService } from '../service/commentaire.service';

@Component({
  selector: 'app-event-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {
  event!: Evenement;
  id!: number;

  commentaires : Commentaire[] = [];
  nvComm ='';

  constructor(public route: ActivatedRoute, public auth: AuthService, public eventService: EvenementService, public router: Router, public ComServ : CommentaireService){
     this.route.params.subscribe(params => {
      this.id = params['id'];

      this.eventService.getEvent(this.id).subscribe(data => {
        this.event = data;

      this.ComServ.getCommEvent(this.id).subscribe(
        data1 => {
          this.commentaires =data1 ;
        }
      );
      });
     });
  }

  chargerPage(){
    this.ComServ.getCommEvent(this.id).subscribe(
      data1 => {
        this.commentaires =data1 ;
      }
    );
  }
  
  Reserver() {
    if(this.auth.userConnect){
      this.router.navigate(['/reservation', this.id]);
    }
    else{
      if (confirm("Connecter à votre compte pour pouver reserver cet evenement ")){
        this.router.navigate(['/login'])
      }
    }
  }

  AjouterCom(){
    const idPar =this.auth.userConnect!.id;
    const com ={contenu : this.nvComm, dateC : new Date()};
    this.ComServ.AjouterCommentaire(this.id, idPar, com).subscribe(()=> {
      this.nvComm ='';
      this.chargerPage();
    });
  }
}