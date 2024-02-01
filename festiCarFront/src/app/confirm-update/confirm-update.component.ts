import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { FestiCarService } from 'src/services/festi-car.service';
import { PanierServiceService } from 'src/services/panier-service.service';
import { ShareDataService } from 'src/services/share-data.service';

@Component({
  selector: 'app-confirm-update',
  templateUrl: './confirm-update.component.html',
  styleUrls: ['./confirm-update.component.scss']
})
export class ConfirmUpdateComponent {

  constructor(private festiCarService : FestiCarService, private shareData : ShareDataService,
    private panierService : PanierServiceService, private auth :AuthService, private route : Router,
    public dialogRef: MatDialogRef<ConfirmUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
  }
  

  close(): void {
    this.dialogRef.close();
  }

  update(): void {
   if(this.auth.user){
   this.festiCarService.getPanierByUserNotConnected(this.data.numAchat.toString()).subscribe(
    (achat) =>  {
      this.shareData.setupdateAchat(achat);
      console.log('achat racu dans comfirm-update', achat);}
   )
   }
   this.route.navigate(['/updating', this.data.idFestival]);
   this.close();
  }

}
