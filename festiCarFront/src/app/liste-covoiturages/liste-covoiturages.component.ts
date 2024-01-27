import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { OffreCovoirage } from 'src/models/OffreCovoiturage';
import { FestiCarService } from 'src/services/festi-car.service';

@Component({
  selector: 'app-liste-covoiturages',
  templateUrl: './liste-covoiturages.component.html',
  styleUrls: ['./liste-covoiturages.component.scss']
})
export class ListeCovoituragesComponent implements OnDestroy {
  covoiturageTab? : OffreCovoirage[] = [];
  festivalsSubscription: Subscription;
  festivalId: number;

  constructor( private festiCarService : FestiCarService, private route: ActivatedRoute,){}


  public getAllCovoiturageByFestivalId(festivalId : number): void {
    this.festivalsSubscription = this.festiCarService.getAllCovoituragesByFestivalId(festivalId)
    .subscribe({
      next: (data: any) => {
        this.covoiturageTab = data;
        console.log('covoiturages111 Data:', data);
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

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.festivalId = +params['id'];
        this.getAllCovoiturageByFestivalId(this.festivalId);
      },
      error: (error) => {
        console.error('Error fetching festival ID:', error);
      }
    });
  }
}
