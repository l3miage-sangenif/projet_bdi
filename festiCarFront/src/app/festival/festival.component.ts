import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss']
})
export class FestivalComponent {
  options: any = {
    componentRestrictions: { country: 'FR' }
  }

  handleAddressChange(address: any) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
  }
 @ViewChild('addressText') addressText!: ElementRef;
  protected placeSubscription: Subscription;

  googleMapService: any;

  ngAfterViewInit(): void {
    this.googleMapService.getPlaceAutocomplete(this.addressText);
  }

  onAddressChange(): void {
    this.placeSubscription =
    this.googleMapService.placeObservable.subscribe(
      (place) => { console.log('nouvelle adresse : ' +
      place.formatted_address);
      }


    );
  }
}
