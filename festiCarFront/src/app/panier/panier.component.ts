import { Component  } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Location as AngularLocation } from '@angular/common';

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
  prixTotal: number;

  constructor ( private dialog: MatDialog, public authService: AuthService, private location: AngularLocation ,
    private router: Router, private panierService : PanierServiceService){

      this.panierService.getPanier().subscribe(panierData => {
        this.panier = panierData;
        console.log('panier partagé dans le composant panier', this.panier);
      });
    }
    ngOnInit(): void {
      this.calculeTotal();
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

  calculeTotal(): void{
    this.prixTotal = this.panier.reduce((total, element) => {
      return total + this.calculeElementTotal(element);
    }, 0);
  }
  calculeElementTotal(element: any): number {
    return element.etapeAchat.reduce((elementTotal, etapeAchat) => {
      return elementTotal + (etapeAchat.nbPlace * etapeAchat.etape.prix);
    }, 0);
  }

  alleraccueil(){
    this.router.navigate(['/accueil']);
  }
  
retournerFestival(){
  this.location.back();

}
}

