export class Reservation {
    codeR! : number;
    dateR: Date;
    nbPlace : number;
    status_R : string;
    idPar!: number;
    idEvent!: number;
    constructor(dateR : Date, nbPlace : number, status_R: string, idPar: number, idEvent: number){
        this.dateR=dateR;
        this.nbPlace=nbPlace;
        this.status_R=status_R;
        this.idPar=idPar;
        this.idEvent=idEvent;
    }
}