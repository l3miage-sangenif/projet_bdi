import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement-effectuee',
  template: ``,
  templateUrl: './paiement-effectuee.component.html',
  styleUrls: ['./paiement-effectuee.component.scss']
})
export class PaiementEffectueeComponent implements OnInit{
  constructor( public dialogRef: MatDialogRef<PaiementEffectueeComponent>,private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
      this.router.navigate(['/accueil']);
    }, 1500);
  }
    
  
}
