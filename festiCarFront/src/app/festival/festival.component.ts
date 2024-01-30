import { Component, ElementRef,  Input,  OnDestroy,  OnInit,  ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { OffreCovoirage } from 'src/models/OffreCovoiturage';
import { FestiCarService } from 'src/services/festi-car.service';
import { ShareDataService } from 'src/services/share-data.service';


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

  festivalsSubscription: Subscription;

   constructor(private route: ActivatedRoute, public festiCarService : FestiCarService, private sharedDataService: ShareDataService){

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
    });
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
}