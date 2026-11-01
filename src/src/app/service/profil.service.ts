import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private baseUrl = 'http://localhost:3000/api/part';

  constructor(public http: HttpClient) { }

  updateProfil(id: number, data: any) {
    return this.http.put(this.baseUrl+"/"+id, data);
  }

  updatePassword(id: number, data: any) {
  return this.http.patch<any>(this.baseUrl+"/"+id, data);
  }
}
