import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})

export class CheckoutFormComponent {
  @Output() paymentSuccess = new EventEmitter<void>();

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  addressFormControl = new FormControl('', [Validators.required]);
  cityFormControl = new FormControl('', [Validators.required]);
  regionFormControl = new FormControl('', [Validators.required]);
  postalCodeFormControl = new FormControl('', [Validators.required]);
  cardNameFormControl = new FormControl('', [Validators.required]);
  cardNumberFormControl = new FormControl('', [Validators.required]);
  expirationMonthFormControl = new FormControl('', [Validators.required]);
  expirationYearFormControl = new FormControl('', [Validators.required]);
  cvvFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  submitForm() {
    if (this.isFormValid()) {
      this.paymentSuccess.emit();
    }
  }

  // Helper method to check if the form is valid
  private isFormValid(): boolean {
    return (
      this.nameFormControl.valid &&
      this.emailFormControl.valid &&
      this.addressFormControl.valid &&
      this.cityFormControl.valid &&
      this.regionFormControl.valid &&
      this.postalCodeFormControl.valid &&
      this.cardNameFormControl.valid &&
      this.cardNumberFormControl.valid &&
      this.expirationMonthFormControl.valid &&
      this.expirationYearFormControl.valid &&
      this.cvvFormControl.valid
    );
  }
}
