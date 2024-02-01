import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FestivalComponent } from './festival/festival.component';
import { ListeCovoituragesComponent } from './liste-covoiturages/liste-covoiturages.component';
import { ChoixCovoiturageComponent } from './choix-covoiturage/choix-covoiturage.component';
import { ListeFestivalsComponent } from './liste-festivals/liste-festivals.component';
import { ChoixPointDepartComponent } from './choix-point-depart/choix-point-depart.component';
import { PanierComponent } from './panier/panier.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ElementComponent } from './element/element.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { UpdateAchatComponent } from './update-achat/update-achat.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'detailfestival/:id', component: FestivalComponent},
  { path: 'listcovoiturage', component: ListeCovoituragesComponent},
  { path: 'choixcovoiturages', component: ChoixCovoiturageComponent},
  { path: 'listfestivals', component: ListeFestivalsComponent},
  { path: 'pointDepart', component: ChoixPointDepartComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'element', component: ElementComponent},
  { path: 'payment', component: CheckoutFormComponent},
  { path: 'updating/:id', component: UpdateAchatComponent},

  { path: '**', redirectTo: '/accueil', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
