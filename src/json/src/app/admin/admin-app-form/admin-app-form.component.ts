import { Component } from '@angular/core';
import { Application } from '../../models/application';
import { IntranetService } from '../../services/intranet.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-app-form',
  imports: [FormsModule],
  templateUrl: './admin-app-form.component.html',
  styleUrl: './admin-app-form.component.css'
})
export class AdminAppFormComponent {
  app : Application = new Application();
  isEdit=false;

  constructor(public appService : IntranetService, public router : Router, public route :ActivatedRoute){
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id){
      this.isEdit=true;
      this.appService.getAppById(parseInt(id)).subscribe(
        data=> this.app=data
      )
    }
    })
  }

  save(){
    if(this.isEdit){
      this.appService.updateApp(this.app.id! ,this.app).subscribe(
        ()=>this.router.navigate(['/admin/apps'])
      );
    }
    else{
      this.appService.createApp(this.app).subscribe(
        ()=> this.router.navigate(['/admin/apps'])
      );
    }
  }
}
