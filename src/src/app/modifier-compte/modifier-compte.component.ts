import { Component } from '@angular/core';
import { User } from '../models/user';
import { UtilisateurService } from '../service/utilisateur.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-compte',
  imports: [FormsModule],
  templateUrl: './modifier-compte.component.html',
  styleUrl: './modifier-compte.component.css'
})
export class ModifierCompteComponent {
  compte : User = new User('','','','','','');

  constructor(public userService : UtilisateurService , public router : Router, public route :ActivatedRoute){
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id){
      this.userService.getUser(id).subscribe({
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

  enregistrer(){
    this.userService.updateUser(this.compte.id,this.compte).subscribe(
      ()=>this.router.navigate(['/admin/event'])
    )
  }
}
