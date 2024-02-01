


import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Achat } from 'src/models/Achat';
import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';


@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent {

  constructor(private festiCarService : FestiCarService, private panierService : PanierServiceService,
    public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  

  close(): void {
    this.dialogRef.close();
  }

  delete(): void {
   this.festiCarService.deleteAchatById(this.data.numAchat).subscribe({
    next: (response) => {
      this.panierService.retirerElementDuPanier(this.data.numAchat);
      this.close(); 
    },
    error: (error) => {
      console.error('Erreur lors de la requête supprimer un element:', error);
    }
  });
  }
}
