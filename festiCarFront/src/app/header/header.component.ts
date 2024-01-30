import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/services/auth.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { Router } from '@angular/router';
import { PanierServiceService } from 'src/services/panier-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(public authService: AuthService, private dialog: MatDialog, private router: Router, private panierService : PanierServiceService){}

  photo = this.authService.photo;
  userId = this.authService.userId;
  userName = this.authService.userName;
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

