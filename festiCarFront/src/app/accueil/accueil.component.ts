import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { FestiCarService } from 'src/services/festi-car.service';
import { ShareDataService } from 'src/services/share-data.service';

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
  festivalDomaine: string='';
  festivalierAddresse: string='';
  addresseLng: number;
  addresselat: number;
  diastanceRechere: any;

  domainControl = new FormControl();

  domainOptions = ['Musiques actuelles', 'Livre et littérature', 'Cirque et Arts de la rue', "Pluridisciplinaire Spectacle vivant",
  "Cinéma et audiovisuel",
  "Transdisciplinaire",
  "Arts plastiques et visuels",
  "Divers spectacle vivant",
  "Danse",
  "Pluridisciplinaire Musique"];


  constructor(public festivalCarService : FestiCarService, private router : Router, private shareDataService: ShareDataService){
  }


  ngOnInit(): void {
  this.getAllFestivals();
  }

      eventItems = [
        {
          imageSrc: "assets/images/Group10.png"
        },
        {
          imageSrc: "assets/images/Group11.png"
        },
        {
          imageSrc: "assets/images/Group12.png"
        },
        {
          imageSrc: "assets/images/Group13.png"
        },
        {
          imageSrc: "assets/images/Group14.png"
        },
        {
          imageSrc: "assets/images/Group15.png"
        },
      ];

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

    public searchFestivals(): void {
      const searchCriteria = {
        name: this.festivalName,
        domaine: this.festivalDomaine,
        dateDebut: this.festivalDate,
        addresseLng: this.addresseLng,
        addresselat: this.addresselat,
        diastancerechere: this.diastanceRechere
      };
    
      this.festivalsSubscription = this.festivalCarService
        .getAllFestivalsFilter(
          searchCriteria.name,
          searchCriteria.domaine,
          searchCriteria.dateDebut,
          searchCriteria.addresseLng,
          searchCriteria.addresselat,
          searchCriteria.diastancerechere
        )
        .subscribe({
          next: (data: any) => {
            this.festivalsTab = data;
            console.log('Filtered Festivals:', data);
            this.shareDataService.updatefestivalTab(data);
            this.shareDataService.updateShowFestivals(true); // Set the flag to true
          },
          error: (error: any) => {
            console.error('Error searching festivals:', error);
          },
        });
    }
}
