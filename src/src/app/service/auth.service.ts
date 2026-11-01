import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userConnect: User | null= null;
  
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(public http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(this.baseUrl+"/login", data);
  }

  register(data : any ){
    return this.http.post<any>(this.baseUrl+"/inscription", data)
  }
}
