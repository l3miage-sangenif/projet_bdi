
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Etape } from 'src/models/Etape';
import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';
import { AuthService } from 'src/services/auth.service';
import { ShareDataService } from 'src/services/share-data.service';


interface EtapeSelected {
  idTrajet: number;
  nbPlace: number;
}


@Component({
  selector: 'app-choix-point-depart',
  templateUrl: './choix-point-depart.component.html',
  styleUrls: ['./choix-point-depart.component.scss']
})

export class ChoixPointDepartComponent implements OnInit {
  selectedStep: Etape;
  selectedPrice: number =0;
  numberOfPlaces: number ;
  totalPrice: number = 0;
  etapeSelected: EtapeSelected = { idTrajet: 0, nbPlace: 0 };

 

  ngOnInit():void{
    this.calculateTotal();
  }

  constructor(private dialog: MatDialog, private authService : AuthService, private shareDataService : ShareDataService,  
    private panierService : PanierServiceService, private festiCarService : FestiCarService,
     @Inject(MAT_DIALOG_DATA) public data: any){
    console.log('Data reçue dans le dialogue : ', data);
    console.log('Data reçue dans le dialogue nbPlace: ', data.nbPlace);
    console.log('nombre de places saisi par l utilisateur: ', this.numberOfPlaces);
  }


  prix(): number {
    return this.selectedStep? this.selectedStep.prix : 0; 
  }

  calculateTotal(): number {
    if (this.numberOfPlaces && this.selectedStep) {
      this.selectedPrice = this.prix();
      this.totalPrice = this.selectedPrice * this.numberOfPlaces + this.data.festival.tarif ;
    } else {
      this.totalPrice = 0;
    }
    return this.totalPrice;
  }
  

  onStepChange(etape: Etape, numberOfPlaces: number): void {
    this.selectedStep = etape;
    console.log('etape choisie par lutilisateur dans fonction onstepChange:', etape);
    this.selectedPrice = etape.prix;
    console.log('selectedStep avant if choisie par lutilisateur dans fonction onstepChange:', this.selectedStep);
    if (this.selectedStep) {
      this.selectedStep.nbPlace = numberOfPlaces;
      console.log('selectedStep choisie par lutilisateur dans fonction onstepChange:', this.etapeSelected);
      this.calculateTotal(); // Mettre à jour le total lorsque l'utilisateur change l'étape
    }
  }
  
 
  close(){
    this.dialog.closeAll();
     
    if (this.selectedStep) {
      this.selectedStep.nbPlace = this.numberOfPlaces;
      this.etapeSelected.idTrajet = this.selectedStep.idtrajet;
      this.etapeSelected.nbPlace = this.numberOfPlaces;
      console.log('etape choisie par lutilisateur:', this.etapeSelected);
    }

    if(this.authService.user){
      this.festiCarService.postPanierWithConnectedUser(this.authService.user.uid, [this.etapeSelected])
      .subscribe({
        next: (achat) => {
          console.log('Réponse de la requête ajouter au  panier pour user connecté:', achat);
          // Autres actions à effectuer avec la réponse si nécessaire
          this.panierService.ajouterElementAuPanier(achat);
        },
        error: (error) => {
          console.error('Erreur lors de la requête ajouter au panier pour user connecté:', error);
        }
      });
    }
    else{
      this.festiCarService.postPanierWithOutConnectedUser([])
      .subscribe({
        next: (response) => {
          console.log('Réponse de la requête ajouter au  panier:', response);
          // Autres actions à effectuer avec la réponse si nécessaire
          const achatIdforNotConnectedUser = response.numAchat;
          this.shareDataService.setachatIdforNotConnectedUser(response.numAchat)

          this.festiCarService.putPanierByAchatId(achatIdforNotConnectedUser, [this.etapeSelected]).subscribe(
            achat => {
              console.log('panier response put requete : ', achat);
              this.panierService.ajouterElementAuPanier(achat)
            }
          
          );

        },
        error: (error) => {
          console.error('Erreur lors de la requête ajouter au panier:', error);
        }
      });
    }
    console.log('ajouté au panier');
  }
  }
