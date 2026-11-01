import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DocumentsService } from '../../services/documents.service';
import { Document } from '../../models/document';

@Component({
  selector: 'app-docs',
  imports: [FormsModule, CommonModule],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {
  appId!: number;
  docs : Document= new Document()
  doc: Document[] = [];

  constructor(public route : ActivatedRoute, public docService : DocumentsService){
    this.route.params.subscribe(
      params => {
        this.appId=params['id'];
        this.loadDocs();
      }
    )
  }
  
  loadDocs() {
    this.docService.getAppDocs(this.appId).subscribe(
      d => this.doc = d
    );
  }
  
  addDoc(){
    this.docService.addDoc(this.appId,this.docs).subscribe(()=>{
      alert('Document ajouté');
      this.docs = new Document();
      this.loadDocs();
    });
  }

  updateDoc(d: Document) {
    this.docService.updateDoc(d.id, d).subscribe(() => {
      alert('Document modifié');
      this.loadDocs();
    });
  }

  deleteDoc(docId : number){
    if (confirm('tu veux supprimer ce document?')){
      this.docService.deleteDoc(docId).subscribe(
        ()=>{alert('Document supprimé');
        this.loadDocs();
      })
    }
  }

}
