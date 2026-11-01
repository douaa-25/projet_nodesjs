import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(public http: HttpClient) { }

  getResEvent(idEvent :number){
    return this.http.get<Reservation[]>(this.baseUrl+"/org/reservation/"+idEvent);
  }

  updateReservStatus(idRes: number, status: string){
    return this.http.patch<any>(this.baseUrl+"/org/reservation/"+idRes, { status_R: status });
  }

  createEvent(idPar: number, idEvent :number, data: any) {
    return this.http.post<Reservation>(this.baseUrl +"/part/reservation/" + idPar +"/"+idEvent, data);
  }
}
