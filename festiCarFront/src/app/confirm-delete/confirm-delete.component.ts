


import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { catchError, forkJoin, of } from 'rxjs';
import { Achat } from 'src/models/Achat';
import { Festival } from 'src/models/Festival';
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
    @Inject(MAT_DIALOG_DATA) public data: { numAchat: number[] ,
                                            festival: Festival}
  ) {}
  

  close(): void {
    this.dialogRef.close();
  }


  // delete(): void {
  //   const deleteRequests = this.data.numAchat.map(numAchat => {
  //     return this.festiCarService.deleteAchatById(numAchat.toString()).pipe(
  //       catchError(error => {
  //         console.error('Erreur lors de la requête pour supprimer un élément :', error);
  //         return of(null); 
  //       })
  //     );
  //   });
  
  //   forkJoin(deleteRequests).subscribe(results => {
  //     results.forEach((response, index) => {
  //       if (response !== null) {
  //         this.panierService.retirerElementDuPanier(this.data.festival.idFestival);
  //       }
  //     });
  //     this.close();
  //   });
  // }
  delete(){
    // const { numAchat, festival } = this.data;

    // numAchat.forEach(num => {
    //   this.festiCarService.deleteAchatById(num.toString()).subscribe({
    //     next: (response) => {
    //       console.log('Suppression réussie pour le numAchat:', num);
    //       // Vous pouvez ajouter ici d'autres logiques après la suppression réussie
    //     },
    //     error: (error) => {
    //       console.error('Erreur lors de la suppression pour le numAchat:', num, error);
    //       // Vous pouvez gérer ici les erreurs lors de la suppression
    //     }
    //   });
    // });

    // this.festiCarService.deleteAchatById(this.data.numAchat[0].toString()).subscribe({
    //       next: (response) => {
    //         console.log('Suppression réussie pour le numAchat:', response);
    //         // Vous pouvez ajouter ici d'autres logiques après la suppression réussie
    //       },
    //       error: (error) => {
    //         console.error('Erreur lors de la suppression pour le numAchat:', error);
    //         // Vous pouvez gérer ici les erreurs lors de la suppression
    //       }
    //     });

  }
}
