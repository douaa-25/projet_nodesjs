import { Routes } from '@angular/router';
import { AdminAppListComponent } from './admin/admin-app-list/admin-app-list.component';
import { AdminAppFormComponent } from './admin/admin-app-form/admin-app-form.component';
import { HomeComponent } from './public/home/home.component';
import { AppListComponent } from './public/app-list/app-list.component';
import { AppDetailComponent } from './public/app-detail/app-detail.component';
import { LoginComponent } from './admin/login/login.component';
import { DocsComponent } from './admin/docs/docs.component';


export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'home', component: HomeComponent},  // accueil
    {path : 'apps', component: AppListComponent},     //catalogue
    {path : 'apps/:id', component: AppDetailComponent},   // fiche

    {path: 'admin/login', component: LoginComponent},

    {path : 'admin/apps', component: AdminAppListComponent},
    {path : 'admin/apps/new', component: AdminAppFormComponent},
    {path : 'admin/apps/:id/edit', component: AdminAppFormComponent},

    {path : 'admin/apps/:id/docs', component : DocsComponent},
];