import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ModifierCompteComponent } from './modifier-compte/modifier-compte.component';
import { ProfilComponent } from './profil/profil.component';
import { ModifEventComponent } from './modif-event/modif-event.component';
import { AjoutEventComponent } from './ajout-event/ajout-event.component';
import { OrgEventListComponent } from './org-event-list/org-event-list.component';
import { ParticipComponent } from './particip/particip.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ReservEventComponent } from './reserv-event/reserv-event.component';

export const routes: Routes = [
    {path : '', component : HomeComponent},
    {path : 'home', component : HomeComponent},
    
    {path : 'login' , component :LoginComponent},
    {path : 'inscription', component : InscriptionComponent},
    {path : 'particip', component : ParticipComponent},
    {path : 'admin/event', component : AdminListComponent},

    {path : 'users/:id/mod', component: ModifierCompteComponent},
    {path : 'profil/:id', component : ProfilComponent},

    {path : 'org/event/:idOrg', component : AjoutEventComponent},
    {path : 'org/event/:idEvent/mod', component : ModifEventComponent},
    {path : 'org/event/:idOrg/org', component : OrgEventListComponent},
    {path : 'event/:id', component : EventDetailComponent},
    {path : 'reservation/:idEvent', component : ReservEventComponent}

];
