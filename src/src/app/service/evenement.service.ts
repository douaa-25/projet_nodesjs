import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(public http: HttpClient) { }

  getAllEvent(){
    return this.http.get<Evenement[]>(this.baseUrl+"/admin/event");
  }

  getEventOrg(idOrg: number) {
    return this.http.get<Evenement[]>(this.baseUrl + "/org/event/"+idOrg+"/org");
  }

  getEvent(idEvent : number){
    return this.http.get<Evenement>(this.baseUrl+"/admin/event/"+idEvent);
  }

  getAcceptEvent() {
    return this.http.get<Evenement[]>(this.baseUrl + "/part/event/accept");
  }

  createEvent(idOrg: number, data: any) {
    return this.http.post<Evenement>(this.baseUrl + "/org/event/" + idOrg, data);
  }

  updateEvent (id: number, data: any) {
    return this.http.put<Evenement>(this.baseUrl + "/org/event/" + id+"/mod", data);
  }

  deleteEvent(id: number) {
    return this.http.delete<any>(this.baseUrl + "/org/event/" + id);
  }

  updateStatus(id: number, status: string) {
    return this.http.patch<any>(this.baseUrl + "/admin/event/" + id +"/status", { statut: status });
  }
}
