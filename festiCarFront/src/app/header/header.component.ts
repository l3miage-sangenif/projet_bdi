import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/services/auth.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { Router } from '@angular/router';

import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';
import { ShareDataService } from 'src/services/share-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {


  constructor(private festiCarService : FestiCarService, public authService: AuthService, private dialog: MatDialog, private router: Router,
     private panierService : PanierServiceService, private shareDataService : ShareDataService,){

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
      this.router.navigate(['/panier']);
  }

  obtenirNombreElementsPanier() {
    return this.panierService.nombreElementsPanier;
  }
}