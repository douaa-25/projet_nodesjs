import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { Commentaire } from '../models/commentaire'; 

@Injectable({ providedIn: 'root' }) 
export class CommentaireService 
{ 
    private baseUrl = 'http://localhost:3000/api'; 
    
    constructor(public http : HttpClient) { } 

    AjouterCommentaire(idEvent :number, idPar : number, data : any)
    { 
        return this.http.post<Commentaire>(this.baseUrl+"/part/com/"+idEvent+"/"+idPar, data); 
    } 

    getAllComm()
    { 
        return this.http.get<Commentaire[]>(this.baseUrl+"/admin/comm"); 
    } 

    getComm(idEvent : number, idPar :number){
        return this.http.get<Commentaire>(this.baseUrl+"/admin/comm/"+idEvent+"/"+idPar+"/commentaire") 
    } 

    getCommEvent(idEvent : number){
        return this.http.get<Commentaire[]>(this.baseUrl+"/part/com/"+idEvent+"/event") 
    } 

    deleteComm(codeCom : number){
        return this.http.delete<any>(this.baseUrl+"/admin/com/"+ codeCom); 
    } 
}