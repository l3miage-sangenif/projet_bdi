import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FestivalComponent } from './festival/festival.component';
import { ListeCovoituragesComponent } from './liste-covoiturages/liste-covoiturages.component';
import { ChoixCovoiturageComponent } from './choix-covoiturage/choix-covoiturage.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'detailfestival', component: FestivalComponent},
  { path: 'listcovoiturage', component: ListeCovoituragesComponent},
  { path: 'choixcovoiturages', component: ChoixCovoiturageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
