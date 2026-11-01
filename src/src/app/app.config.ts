import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};



















/*<ng-container *ngFor="let e of events">
        <a *ngIf="e.codeC == c.codeC"
        [routerLink]="['/event', e.idEvent]">

        <img [src]="e.image">
        </a>
    </ng-container>*/

/* <!--<ng-container *ngFor="let e of events">
        <a *ngIf="e.codeC == c.codeC"
        [routerLink]="['/event', e.idEvent]">

        <img [src]="e.image">
        </a>
    </ng-container>-->*/
