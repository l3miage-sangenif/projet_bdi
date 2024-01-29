import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement-effectuee',
  template: ``,
  templateUrl: './paiement-effectuee.component.html',
  styleUrls: ['./paiement-effectuee.component.scss']
})
export class PaiementEffectueeComponent {
  constructor( public dialogRef: MatDialogRef<PaiementEffectueeComponent>,private router: Router) {}
  goToAccueil() {
   
    this.dialogRef.close();
    this.router.navigate(['/AccueilComponent']);
  }
}
