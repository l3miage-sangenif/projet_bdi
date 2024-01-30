
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';
import { Etape } from 'src/models/Etape';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-choix-point-depart',
  templateUrl: './choix-point-depart.component.html',
  styleUrls: ['./choix-point-depart.component.scss']
})

export class ChoixPointDepartComponent {

  selectedStep: Etape;
  selectedPrice: number =0;
  numberOfPlaces: number = 0;
  totalPrice: number = 0;

  constructor(private dialog: MatDialog, private authService : AuthService,  private panierService : PanierServiceService, private festiCarService : FestiCarService, @Inject(MAT_DIALOG_DATA) public data: any){
    console.log('Data reçue dans le dialogue : ', data);
    console.log('Data reçue dans le dialogue nbPlace: ', data.nbPlace);
    // this.numberOfPlaces = data.nbPlace;
    console.log('Data reçue dans le dialogue nbPlace appel achat: ', this.numberOfPlaces);
  }


  prix(): number {
    return this.selectedStep? this.selectedStep.prix : 0; 
  }
  calculateTotal(): number {
  this.selectedPrice=this.prix();
    return this.totalPrice = this.selectedPrice * this.numberOfPlaces;
  }
 
  
  close(){
    this.panierService.ajouterAuPanier();
    this.dialog.closeAll();
    if(this.authService.user){
      this.festiCarService.postPanierWithConnectedUser(this.authService.user.uid,this.numberOfPlaces, this.data.etape)
      .subscribe({
        next: (response) => {
          console.log('Réponse de la requête ajouter au  panier pour user connecté:', response);
          // Autres actions à effectuer avec la réponse si nécessaire
        },
        error: (error) => {
          console.error('Erreur lors de la requête ajouter au panier pour user connecté:', error);
        }
      });
    }
    else{
      this.festiCarService.postPanierWithOutConnectedUser(this.numberOfPlaces, this.data.etape)
      .subscribe({
        next: (response) => {
          console.log('Réponse de la requête ajouter au  panier:', response);
          // Autres actions à effectuer avec la réponse si nécessaire
        },
        error: (error) => {
          console.error('Erreur lors de la requête ajouter au panier:', error);
        }
      });
    }
    console.log('ajouté au panier');
  }
}
