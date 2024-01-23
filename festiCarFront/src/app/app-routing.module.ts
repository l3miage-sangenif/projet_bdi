import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ConnexionPageComponent } from './connexion-page/connexion-page.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionPageComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
