export class User {
  id! : number;
  nom : string;
  prenom : string;
  email : string;
  password : string;
  roles : string
  status_compte: string
  constructor (nom :string, prenom : string, email :string, password : string, roles : string, status_compte: string){
    this.nom=nom;
    this.prenom=prenom;
    this.email=email;
    this.password=password;
    this.roles=roles;
    this.status_compte=status_compte;
  }
}
