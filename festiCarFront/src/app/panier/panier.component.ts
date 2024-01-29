import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  constructor ( private dialog: MatDialog){}

  onCreate(){
 
  const dialogRef = this.dialog.open(PaymentDialogComponent, {
    
  });

  dialogRef.afterClosed().subscribe(() => {
    console.log('Dialog closed');
  });
}
}
