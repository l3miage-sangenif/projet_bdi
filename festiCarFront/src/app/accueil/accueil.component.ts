import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(public festivalCarService : FestiCarService, private router : Router){
  }

  ngOnInit(): void {
    // this.getAllFestivals();
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
      this.router.navigate(['/listefestival']);
    }


    ngOnDestroy(): void {
      if (this.festivalsSubscription) {
        this.festivalsSubscription.unsubscribe();
      }
    }

}
