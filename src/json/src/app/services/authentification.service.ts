import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiUrl = 'http://localhost:3001/api/auth/login';

  constructor(public http: HttpClient) { }

  login(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

}






























/*, public router : Router*/