import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/services/auth.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { Router } from '@angular/router';

import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {


  constructor(private festiCarService : FestiCarService, public authService: AuthService, private dialog: MatDialog, private router: Router,
     private panierService : PanierServiceService){

  }


  connexion(){
     this.dialog.open(ConnexionComponent, {
      width: '800px',
    });
  }

  alleraccueil(){
    this.router.navigate(['/accueil']);
  }

  allerpanier(){
    if(this.authService.user){
      this.festiCarService.getPanierByUser(this.authService.user.uid)
      .subscribe({
        next: (response) => {
          console.log('Réponse de la requête get panier pour user connecté:', response);
          const panierData = response; 
          this.panierService.mettreAJourPanier(panierData);
        },
        error: (error) => {
          console.error('Erreur lors de la requête get panier pour user connecté:', error);
        }
      });
    }
    this.router.navigate(['/panier']);

  }

  obtenirNombreElementsPanier() {
    return this.panierService.nombreElementsPanier;
  }
}