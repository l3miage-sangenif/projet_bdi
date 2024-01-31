import { Component, ElementRef,  Input,  OnDestroy,  OnInit,  ViewChild } from '@angular/core';
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
  @Input() covoiturageTab? : OffreCovoirage[] = [];
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
    console.log(address.formatted_address)
    console.log(this.addresseFestivalierlng)
    console.log(this.addresseFestivalierlat)
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
        console.log('covoiturages Data:', data);
        this.showCovoiturages = true;
        console.log(this.showCovoiturages);
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
      addresseFestivalierlat:  this.addresseFestivalierlat
  
    };
    this.festivalsSubscription = this.festiCarService.getCovoituragefiltered(
      searchCriteria.festivalId,
      searchCriteria.pass,
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
          console.log('No covoiturages available.');
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
        if(this.authService.user){
          this.festiCarService.getPanierByUser(this.authService.user.uid)
          .subscribe({
            next: (response) => {
              console.log('Réponse de la requête get panier pour user connecté:', response);
              const panierData = response; 
              this.panierService.mettreAJourPanier(panierData);
              console.log('panierData envoyé au service:', panierData);
              this.router.navigate(['/panier']);
            },
            error: (error) => {
              console.error('Erreur lors de la requête get panier pour user connecté:', error);
            }
          });
        }
       
      }
   
      alleraccueil(){
        this.location.back();
      }

}
