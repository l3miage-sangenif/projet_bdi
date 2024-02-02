import { Component  } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Location as AngularLocation } from '@angular/common';

import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { AuthService } from 'src/services/auth.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { Router } from '@angular/router';
import { PanierServiceService } from 'src/services/panier-service.service';
import { FestiCarService } from 'src/services/festi-car.service';
import { Festival } from 'src/models/Festival';
import { MessageDialogService } from 'src/services/message-dialog.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  panier: any[] = [];
  item: any
  prixTotal: number = 0;
  panierGroupe : { festival: Festival, achats: any[], numAchats: number[] }[];

  constructor (private messageDialog : MessageDialogService, private dialog: MatDialog, public authService: AuthService, private location: AngularLocation ,
    private router: Router, public panierService : PanierServiceService, private festiCarService : FestiCarService){

      this.panierService.getPanierGroupe().subscribe(panierGroupeData =>{
        this.panierGroupe = panierGroupeData;
        console.log('paniergroupe partagé dans le composant panier', this.panierGroupe);
      });

   
    }

    ngOnInit(): void {
      this.calculeTotal();
    }

  onCreate(){
    if(this.authService.user){
      this.panierGroupe.forEach(element => {
        element.numAchats.forEach(numAchat => {
          this.festiCarService.validateAchatById(numAchat.toString()).subscribe({
            next: (response) => {
              console.log('Achat validé avec succès:', response);
                    this.dialog.open(PaymentDialogComponent, { });
                    this.panierService.viderPanier();
            },
            error: (error) => {
              console.error('Erreur lors de la validation de l\'achat:', error);
              // Traitez l'erreur si nécessaire
            }
          });
        });
      });
      
    }
    else{
      this.dialog.open(ConnexionComponent, { 

        width: '800px',
      });
    }
  }

  showAndCloseMessageDialog(): void {
    this.messageDialog.openDialog('Désolé, il y a des places qui ne sont plus disponibles.\nVeuillez revoir vos choix svp.');
    // Fermer le dialogue après 3 secondes (3000 millisecondes)
    setTimeout(() => {
      this.messageDialog.closeDialog();
      this.router.navigate(['/accueil']);
    }, 2050);
  }

  calculeTotal(): void{
    this.panierGroupe.forEach(element => {
      element.achats.forEach(achat => {
        this.prixTotal = this.prixTotal + this.calculPassAchat(achat, element.festival)
      })
    })
  }
  calculeElementTotal(element: any): number {
    return element.etapeAchat.reduce((elementTotal, etapeAchat) => {
      return elementTotal + (etapeAchat.nbPlace * etapeAchat.etape.prix);
    }, 0);
  }

  calculPassAchat(achat : any, festival):number{
    return  (achat.etape.prix + festival.tarif )* achat.nbPlace ;
}

  alleraccueil(){
    this.router.navigate(['/accueil']);
  }
  
  retournerFestival(){
    this.location.back();

  }
}

