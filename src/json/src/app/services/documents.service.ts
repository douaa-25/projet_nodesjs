import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from '../models/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  public baseUrl = 'http://localhost:3001/api';
  constructor(public http: HttpClient) { }
  
  getAppDocs(id : number){
    return this.http.get<Document[]>(this.baseUrl+"/apps/"+id+"/docs");
  }

  private authHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
  }

  addDoc(appId : number, doc: Document){
    return this.http.post<Document>(this.baseUrl+"/admin/apps/"+appId+"/docs", doc, this.authHeaders());
  }
  updateDoc(id : number, doc : Document){
    return this.http.put<Document>(this.baseUrl+"/admin/docs/"+id, doc, this.authHeaders());
  }
  deleteDoc(docId : number){
    return this.http.delete<any>(this.baseUrl+"/admin/docs/"+docId, this.authHeaders());
  }
}
