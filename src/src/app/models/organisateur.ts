import { User } from "./user";

export class Organisateur extends User{
    constructor(nom: string, prenom: string, email: string, password: string, roles : string, status_compte : string){
        super(nom,prenom,email,password, roles,status_compte);
    }
}
