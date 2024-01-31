
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Etape } from 'src/models/Etape';
import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';
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

  constructor(private dialog: MatDialog, private authService : AuthService,  
    private panierService : PanierServiceService, private festiCarService : FestiCarService,
     @Inject(MAT_DIALOG_DATA) public data: any){
    console.log('Data reçue dans le dialogue : ', data);
    console.log('Data reçue dans le dialogue nbPlace: ', data.nbPlace);
    // this.numberOfPlaces = data.nbPlace;
    console.log('nombre de places saisi par l utilisateur: ', this.numberOfPlaces);
  }


  prix(): number {
    return this.selectedStep? this.selectedStep.prix : 0; 
  }

  calculateTotal(): number {
  this.selectedPrice=this.prix();
    return this.totalPrice = this.selectedPrice * this.numberOfPlaces;
  }
 

  close(){
    this.dialog.closeAll();
     
    this.data.etape.forEach((etape: Etape) => {
      etape.nbPlacesSaisies = this.numberOfPlaces;
    });

    if(this.authService.user){
      this.festiCarService.postPanierWithConnectedUser(this.authService.user.uid,this.data.nbPlace, this.data.etape)
      .subscribe({
        next: (response) => {
          console.log('Réponse de la requête ajouter au  panier pour user connecté:', response);
          // Autres actions à effectuer avec la réponse si nécessaire
          this.panierService.ajouterAuPanier();
        },
        error: (error) => {
          console.error('Erreur lors de la requête ajouter au panier pour user connecté:', error);
        }
      });
    }
    else{
      this.festiCarService.postPanierWithOutConnectedUser(this.data.nbPlace, this.data.etape)
      .subscribe({
        next: (response) => {
          console.log('Réponse de la requête ajouter au  panier:', response);
          // Autres actions à effectuer avec la réponse si nécessaire
          this.panierService.ajouterAuPanier();
        },
        error: (error) => {
          console.error('Erreur lors de la requête ajouter au panier:', error);
        }
      });
    }
    console.log('ajouté au panier');
  }
  }
