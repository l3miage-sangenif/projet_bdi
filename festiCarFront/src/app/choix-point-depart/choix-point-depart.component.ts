import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';
@Component({
  selector: 'app-choix-point-depart',
  templateUrl: './choix-point-depart.component.html',
  styleUrls: ['./choix-point-depart.component.scss']
})

export class ChoixPointDepartComponent {
  constructor(private dialog: MatDialog, private panierService : PanierServiceService, private festiCarService : FestiCarService, @Inject(MAT_DIALOG_DATA) public data: any){}
  
  close(){
    this.panierService.ajouterAuPanier();
    this.dialog.closeAll();
    this.festiCarService.postPanierWithOutConnectedUser(this.data.nbPlace, this.data.etape);
  }
}
