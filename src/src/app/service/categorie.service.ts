import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(public http: HttpClient) { }

  getAllCat() {
    return this.http.get<Categorie[]>(this.baseUrl + "/admin/cats");
  }

  getCat(idCat: number) {
    return this.http.get<Categorie>(this.baseUrl + "/admin/cat/" +idCat);
  }

  addCat(data: any) {
    return this.http.post(this.baseUrl + "/admin/cat", data);
}

  deleteCat(id: number) {
    return this.http.delete(this.baseUrl + "/admin/cat/" + id);
}
}
