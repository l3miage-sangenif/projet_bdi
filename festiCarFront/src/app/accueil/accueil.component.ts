import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { FestiCarService } from 'src/services/festi-car.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, OnDestroy {
  festivalsTab? : Festival[] = [];
  festivalsSubscription: Subscription;
  festivalName: string = '';
  festivalPlace: string = '';
  festivalDate: string = '';
  festivalDomaine: String='';
  festivalierAddresse: string='';


  constructor(public festivalCarService : FestiCarService, private router : Router){
  }

  ngOnInit(): void {
  this.getAllFestivals();
  }

    public getAllFestivals(): void {
      this.festivalsSubscription = this.festivalCarService.getAllFestival().subscribe({
        next: (data: any) => {
          this.festivalsTab = data;
          console.log('Festivals Data:', data);
        },
        error: (error: any) => {
          console.error('Error fetching festivals:', error);
        }
      });
    
    }


    ngOnDestroy(): void {
      if (this.festivalsSubscription) {
        this.festivalsSubscription.unsubscribe();
      }
    }
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

    searchFestivals(): void {
     
      
    }
}
