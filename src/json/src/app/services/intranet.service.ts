import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Application } from '../models/application';


@Injectable({
  providedIn: 'root'
})
export class IntranetService {
  public baseUrl = 'http://localhost:3001/api';

  constructor(public http: HttpClient) { }

  getAllAppAct(){
    return this.http.get<Application[]>(this.baseUrl+"/apps");
  }

  getAppById(id :number){
    return this.http.get<Application>(this.baseUrl+"/apps/"+id);
  }

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
  }

  getAllApp(){
    return this.http.get<Application[]>(this.baseUrl+"/admin/apps/list", this.getAuthHeaders());
  }

  createApp(app : Application){
    return this.http.post<Application>(this.baseUrl+"/admin/apps", app, this.getAuthHeaders());
  }

  updateApp(id : number, app : Application){
    return this.http.put<Application>(this.baseUrl+"/admin/apps/"+id, app, this.getAuthHeaders());
  }

  UpdateStatus(id : number, status :string){
    return this.http.patch<any>(this.baseUrl+"/admin/apps/"+id+"/status",{ status: status }, this.getAuthHeaders());
  }  
}
