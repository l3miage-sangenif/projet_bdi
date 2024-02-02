
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Etape } from 'src/models/Etape';
import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';
import { AuthService } from 'src/services/auth.service';
import { ShareDataService } from 'src/services/share-data.service';
import { MessageDialogService } from 'src/services/message-dialog.service';


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
    private panierService : PanierServiceService, private festiCarService : FestiCarService, private messageDialogService: MessageDialogService,
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
      this.totalPrice = (this.selectedPrice + this.data.festival.tarif) * this.numberOfPlaces ;
    } else {
      this.totalPrice = 0;
    }
    return this.totalPrice;
  }

  showAndCloseMessageDialog(): void {
    this.messageDialogService.openDialog('Votre choix a bien été ajouté à votre panier.');

    // Fermer le dialogue après 3 secondes (3000 millisecondes)
    setTimeout(() => {
      this.messageDialogService.closeDialog();
    }, 1050);
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
     
    }

    if(this.authService.user){
      this.festiCarService.postPanierWithConnectedUser(this.authService.user.uid, [this.etapeSelected])
      .subscribe({
        next: (achat) => {
          this.panierService.ajouterElementAuPanier(achat);
          this.panierService.updateShowPanier();
          this.showAndCloseMessageDialog();
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
    
          const achatIdforNotConnectedUser = response.numAchat;
          this.shareDataService.setachatIdforNotConnectedUser(response.numAchat)

          this.festiCarService.putPanierByAchatId(achatIdforNotConnectedUser, [this.etapeSelected]).subscribe(
            achat => {
              this.panierService.ajouterElementAuPanier(achat);
              this.panierService.updateShowPanier();
              this.showAndCloseMessageDialog();
            }
          
          );

        },
        error: (error) => {
        }
      });
    }
  }
  }
