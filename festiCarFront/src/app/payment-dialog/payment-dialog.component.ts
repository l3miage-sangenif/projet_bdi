import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-payment-dialog',
  template: `
  <div *ngIf="!showThankYou">
  
  <app-checkout-form (paymentSuccess)="onPaymentSuccess()"></app-checkout-form>
</div>
<div *ngIf="showThankYou">
  <app-paiement-effectuee></app-paiement-effectuee>
</div>
  `,
})
export class PaymentDialogComponent {
  showThankYou = false;

  constructor() {}
  

  onPaymentSuccess() {
    this.showThankYou = true;
  }
}
