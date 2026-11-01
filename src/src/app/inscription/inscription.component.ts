import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inscription',
  imports: [RouterLink,FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  nom = '';
  prenom = '';
  email = '';
  password = '';
  confirmPassword = '';
  roles = 'participant';
  message = '';
  status_compte = '';

  t1 = false;
  t2 = false;

  constructor(public auth: AuthService, public router: Router){}

  register() {
    const password = this.password;
    const lett ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chif ="0123456789";
    
    this.t1=false;
    this.t2=false;

    for(let i =0 ; i< password.length ; i++){
      const c =password[i];
      if(lett.includes(c)){
        this.t1=true;
      }
      if (chif.includes(c)){
        this.t2=true;
      }
    }

    if (this.nom=="" || this.prenom==""){
      this.message="Entrer votre nom et prenom"
    }

    else if (this.email == '' || !this.email.includes('@')){
      this.message = "Email invalide";
    }
    else if(password.length > 9 || !this.t1 || !this.t2){
      this.message ="le mots de passe doit etre contient des chiffres, des lettres et de taille ne dépasse pas 9 caractéres!!"
    }
    else if(this.password !== this.confirmPassword){
      this.message = "Mot de passe non identique !!";
      return;
    }
    else {
      this.auth.register({nom: this.nom, prenom: this.prenom, email: this.email, password: this.password, roles: this.roles, status_compte :"Activé"}).subscribe({
      next: res => {
        this.message = "Compte créé avec succès";

        if(this.roles == "participant"){
          this.router.navigate(['/home']);
        }

        if(this.roles == "organisateur"){
          this.router.navigate(['/login']); 
        }
      },

      error: () => {
        this.message = "Erreur inscription";
      }

    });
    }
  }

}
