import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfilService } from '../service/profil.service';
import { UtilisateurService } from '../service/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-profil',
  imports: [FormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  compte : User = new User('','','','','','');
  nvPassword: string = '';
  cfPassword: string = '';

  constructor(public profilServ : ProfilService, public userServ : UtilisateurService , public router : Router, public route : ActivatedRoute){
  this.route.params.subscribe(params => {
      const id = params['id'];
      if (id){
      this.userServ.getUser(id).subscribe({
        next : data =>{
          this.compte.id = data.id;
          this.compte.nom = data.nom;
          this.compte.prenom = data.prenom;
          this.compte.email = data.email;
          this.compte.password = data.password;
          this.compte.roles = data.roles;
          this.compte.status_compte = data.status_compte;
        },
        error : err => console.error(err)})
      }
    })
  } 

  Enregistrer(){
    this.profilServ.updateProfil(this.compte.id,this.compte).subscribe(
      res=>{console.log(res);}
    );

    if (this.nvPassword && this.cfPassword){
      if(this.nvPassword !== this.cfPassword){
        alert("Les mots de passe ne correspondent pas !!");
        return;
      } 
      this.profilServ.updatePassword(this.compte.id,{password : this.nvPassword}).subscribe(
        res =>{console.log(res);
          alert("mot de passe modifié");
        })
    }
    alert("Profil mis à jour");
  }

}
