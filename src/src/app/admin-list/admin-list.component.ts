import { Component } from '@angular/core';
import { User } from '../models/user';
import { Evenement } from '../models/evenement';
import { UtilisateurService } from '../service/utilisateur.service';
import { EvenementService } from '../service/evenement.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Commentaire } from '../models/commentaire';
import { CommentaireService } from '../service/commentaire.service';
import { CategorieService } from '../service/categorie.service';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-admin-list',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent {
  comptes : User[]=[];
  events : Evenement[]=[];
  commentaires : Commentaire []=[];
  categories: Categorie[] = [];
  nvCat = '';
  constructor(public userService : UtilisateurService, public catService : CategorieService, public comServ : CommentaireService, public eventServ : EvenementService ,public route :ActivatedRoute){
    this.userService.getAllUsers().subscribe(
      data=>{this.comptes=data;
        console.log(data);
      }
    )
    this.eventServ.getAllEvent().subscribe(
      data1 =>{this.events=data1;
        console.log(data1);
      }
    )
    this.comServ.getAllComm().subscribe(
      data => {this.commentaires = data;
        console.log(data);
      }
    )
    this.catService.getAllCat().subscribe(data => {
      this.categories = data;
    });
  }

  desactCompte(id : number){
      this.userService.UpdateStatus(id!,'Desactiver').subscribe(
      ()=>alert("Compte désactivée")
    )
  }

  suppCompte(id :number){
    if (confirm('Tu veux supprimer ce compte ?')){
      this.userService.deleteUser(id).subscribe(
        ()=>{alert('Compte supprimé ');
      })
    }
  }

  changer(idEvent: number, nouveauStatut: string) {
    this.eventServ.updateStatus(idEvent, nouveauStatut).subscribe({
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

  suppComm(codeCom : number){
  if(confirm("Supprimer ce commentaire ?")){
    this.comServ.deleteComm(codeCom).subscribe(
      ()=>{
        alert("Commentaire supprimé");
        this.comServ.getAllComm().subscribe(
          data => {
            this.commentaires = data;
          }
        );
      }
    );
  }
  }

  ajouterCat() {
      this.catService.addCat({ nomCat: this.nvCat }).subscribe(() => {
        alert("Categorie ajoutée");
        this.nvCat = '';

        this.catService.getAllCat().subscribe(data => {
        this.categories = data;
      });
    });
  }

  deleteCat(id: number) {
    if (confirm("Supprimer ce catégorie ?")) {
        this.catService.deleteCat(id).subscribe(() => {
      });
    }
  }
}
