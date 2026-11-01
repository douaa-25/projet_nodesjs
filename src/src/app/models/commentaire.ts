export class Commentaire {
    codeCom!: number;
    contenu : string;
    dateC : Date;
    idEvent : number;
    idPar : number;
    constructor(contenu: string , dateC : Date, idEvent :number, idPar : number){
        this.contenu=contenu;
        this.dateC=dateC;
        this.idEvent=idEvent;
        this.idPar=idPar;
    }
}
