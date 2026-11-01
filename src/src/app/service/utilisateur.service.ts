import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private baseUrl = 'http://localhost:3000/api/admin';

  constructor(public http: HttpClient) { }

  getAllUsers(){
    return this.http.get<User[]>(this.baseUrl+"/users");
  }

  getUser(id : number){
    return this.http.get<User>(this.baseUrl+"/user/"+id)
  }

  updateUser(id : number, user : User){
    return this.http.put<User>(this.baseUrl+"/users/"+id, user);
  }

  deleteUser(id : number){
    return this.http.delete<any>(this.baseUrl+"/users/"+id);
  }

  UpdateStatus(id : number, status_compte :string){
    return this.http.patch<any>(this.baseUrl+"/users/"+id+"/status",{status_compte : status_compte});
  }
}
