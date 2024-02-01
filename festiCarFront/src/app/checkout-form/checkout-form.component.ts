import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/services/auth.service';
import { PanierServiceService } from 'src/services/panier-service.service';
import { ShareDataService } from 'src/services/share-data.service';

export class MyErrorStateMatcher implements  ErrorStateMatcher {

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

export class CheckoutFormComponent implements OnInit {
  @Output() paymentSuccess = new EventEmitter<void>();

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  addressFormControl = new FormControl('', [Validators.required]);
  cityFormControl = new FormControl('', [Validators.required]);
  postalCodeFormControl = new FormControl('', [Validators.required]);
  cardNameFormControl = new FormControl('', [Validators.required]);
  cardNumberFormControl = new FormControl('', [Validators.required]);
  expirationMonthFormControl = new FormControl('', [Validators.required]);
  expirationYearFormControl = new FormControl('', [Validators.required]);
  cvvFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthService, private shareDataService: ShareDataService, private panierService:  PanierServiceService){

  }

  submitForm() {
    if (this.isFormValid()) {
      this.paymentSuccess.emit();
      this.panierService.viderPanier();
    }
  }

  // Helper method to check if the form is valid
  private isFormValid(): boolean {
    return (
      this.nameFormControl.valid &&
      this.emailFormControl.valid &&
      this.addressFormControl.valid &&
      this.cityFormControl.valid &&
      this.postalCodeFormControl.valid &&
      this.cardNameFormControl.valid &&
      this.cardNumberFormControl.valid &&
      this.expirationMonthFormControl.valid &&
      this.expirationYearFormControl.valid &&
      this.cvvFormControl.valid
    );
  }

  ngOnInit(): void {
    const userInfo = this.authService.getUserInfo();
    const selectedAddressDetails = this.shareDataService.getSelectedAddressDetails();

    this.nameFormControl.setValue(userInfo.name);
    this.emailFormControl.setValue(userInfo.email);
    
    if (selectedAddressDetails) {
      this.addressFormControl.setValue(selectedAddressDetails.address);
      this.cityFormControl.setValue(selectedAddressDetails.city);
      this.postalCodeFormControl.setValue(selectedAddressDetails.postalCode);
    }
  }

}

