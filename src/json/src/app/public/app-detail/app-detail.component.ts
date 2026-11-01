import { Component, numberAttribute } from '@angular/core';
import { Application } from '../../models/application';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IntranetService } from '../../services/intranet.service';
import { DocumentsService } from '../../services/documents.service';
import { CommonModule } from '@angular/common';
import { Document } from '../../models/document';

@Component({
  selector: 'app-app-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './app-detail.component.html',
  styleUrl: './app-detail.component.css'
})
export class AppDetailComponent {
  app!: Application;
  docs: Document[] = [];

  constructor(public route : ActivatedRoute, public appService : IntranetService, public docService : DocumentsService){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.appService.getAppById(id).subscribe(a => this.app = a);
    this.docService.getAppDocs(id).subscribe(d=> this.docs = d);
    
  }

}
