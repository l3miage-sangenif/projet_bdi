import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-payment-dialog',
  template: `
  <div *ngIf="!showThankYou">
  <!-- CheckoutFormComponent is displayed initially -->
  <app-checkout-form (paymentSuccess)="onPaymentSuccess()"></app-checkout-form>
</div>
<div *ngIf="showThankYou">
  <app-paiement-effectuee></app-paiement-effectuee>
</div>
  `,
})
export class PaymentDialogComponent {
  showThankYou = false;

  constructor(private dialogRef: MatDialogRef<PaymentDialogComponent>) {}
  

  onPaymentSuccess() {
    this.showThankYou = true;
  }
}
