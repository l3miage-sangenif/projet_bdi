import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-choix-point-depart',
  templateUrl: './choix-point-depart.component.html',
  styleUrls: ['./choix-point-depart.component.scss']
})

export class ChoixPointDepartComponent {
  constructor(
    public dialogRef: MatDialogRef<ChoixPointDepartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OffreCovoirage
  ) {}
  selectedStep: Etape;
  selectedPrice: number =0;
  numberOfPlaces: number = 1;
  totalPrice: number = 0;
  prix(): number {
    return this.selectedStep? this.selectedStep.prix : 0;
    
  }
  calculateTotal(): number {
  this.selectedPrice=this.prix();
    return this.totalPrice = this.selectedPrice * this.numberOfPlaces;
  }
 
  close(): void {
    this.dialogRef.close();
  }
}
