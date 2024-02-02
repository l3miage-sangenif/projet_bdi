import { Component, ElementRef,  OnDestroy,  OnInit,  ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { OffreCovoirage } from 'src/models/OffreCovoiturage';
import { FestiCarService } from 'src/services/festi-car.service';
import { ShareDataService } from 'src/services/share-data.service';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { PanierServiceService } from 'src/services/panier-service.service';
import { Location as AngularLocation } from '@angular/common';


@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss']
})
export class FestivalComponent implements OnInit, OnDestroy {
  covoiturageTab? : OffreCovoirage[] = [];
  showCovoiturages: boolean = false;

  festivalId: number;
  festival: Festival;
  festivalPlace: number;
  AddresseFestivalier: string='';
  addresseFestivalierlng: number;
  addresseFestivalierlat: number;
  distanceRechercheCovoiturage: any;
  festivalsSubscription: Subscription;
  showMessage: boolean =false;
  modele: string='';

   constructor(private route: ActivatedRoute, public festiCarService : FestiCarService, private sharedDataService: ShareDataService,
     private cdr: ChangeDetectorRef,  public authService: AuthService, private panierService : PanierServiceService, 
     private router: Router,
     private location: AngularLocation){

   }

  options: any = {
    componentRestrictions: { country: 'FR' }
  }

  handleAddressChange(address: any) {
    this.addresseFestivalierlng=address.geometry.location.lng();
    this.addresseFestivalierlat=address.geometry.location.lat();
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
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.festivalId = +params['id'];
        this.festiCarService.getAllFestivalById(this.festivalId).subscribe({
          next: (data) => {
            this.festival = data;
          },
          error: (error) => {
            console.error('Error fetching festival:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error fetching festival ID:', error);
      }
    }
    );
  }

  public getAllCovoiturageByFestivalId(festivalId : number): void {
    this.festivalsSubscription = this.festiCarService.getAllCovoituragesByFestivalId(festivalId)
    .subscribe({
      next: (data: any) => {
        this.covoiturageTab = data;
        this.showCovoiturages = true;
        this.sharedDataService.updateCovoiturageTab(data);
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
  public getCovoituragefiltrer(festivalId : number): void{
    const searchCriteria = {
      festivalId: this.festivalId,
      pass: this.festivalPlace,
      addresseFestivalierlng: this.addresseFestivalierlng,
      addresseFestivalierlat:  this.addresseFestivalierlat,
      modele: this.modele
  
    };
    this.addresseFestivalierlng=0;
    this.addresseFestivalierlat= 0;
    this.festivalsSubscription = this.festiCarService.getCovoituragefiltered(
      searchCriteria.festivalId,
      searchCriteria.pass,
      searchCriteria.modele,
      searchCriteria.addresseFestivalierlng,
      searchCriteria.addresseFestivalierlat
    )

    .subscribe({
      next: (data: any) => {
        if (data && data.length > 0){
          this.covoiturageTab = data;
          this.showCovoiturages = true;
          this.showMessage=false;
          this.sharedDataService.updateCovoiturageTab(data);
        }
        else {
          this.showMessage = true;
          this.showCovoiturages = false;
        }
       
      },
      error: (error: any) => {
        console.error('Error fetching covoiturages:', error);
        this.showMessage = true;
        this.showCovoiturages = false;


      }
    });
  }

  allerpanier(){
    this.router.navigate(['/panier']);
  }


  alleraccueil(){
    this.location.back();
  }

}