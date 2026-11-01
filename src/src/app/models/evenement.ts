export class Evenement {
    idEvent! :number;
    titre : string;
    descriptions : string;
    date_E : Date;
    lieu : string;
    image : string;
    prix_Billet : number;
    statut : string;
    codeC!: number;
    idOrg! : number;
    constructor(titre :string, descriptions :string, date_E : Date, lieu : string, image :string, prix_Billet: number, statut : string, codeC: number, idOrg : number){
        this.titre=titre;
        this.descriptions=descriptions;
        this.date_E=date_E;
        this.lieu=lieu;
        this.image=image;
        this.prix_Billet=prix_Billet;
        this.statut=statut;
        this.codeC=codeC;
        this.idOrg=idOrg;
    }
}