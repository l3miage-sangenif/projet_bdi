import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { AuthService } from 'src/services/auth.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { Router } from '@angular/router';
import { PanierServiceService } from 'src/services/panier-service.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  panier: any[] = [];
  item: any

  constructor ( private dialog: MatDialog, public authService: AuthService, 
    private router: Router, private panierService : PanierServiceService){

      this.panierService.getPanier().subscribe(panierData => {
        this.panier = panierData;
        console.log('panier partagé dans le composant panier', this.panier);
      });
    }


  onCreate(){
    if(this.authService.user){
      this.dialog.open(PaymentDialogComponent, { 
      });
    }
    else{
      this.dialog.open(ConnexionComponent, { 

        width: '800px',
      });
    }
  }

  

  alleraccueil(){
    this.router.navigate(['/accueil']);
  }

}

