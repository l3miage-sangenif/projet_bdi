import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { FestiCarService } from 'src/services/festi-car.service';




@Component({
  selector: 'app-liste-festivals',
  templateUrl: './liste-festivals.component.html',
  styleUrls: ['./liste-festivals.component.scss']
})
export class ListeFestivalsComponent implements OnInit {
  festivalsTab? : Festival[];
  festivalsSubscription: Subscription;

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public festivalCarService : FestiCarService){
  }

  ngOnInit(): void {
    this.getAllFestivals();
  }

  name? : string;
  date? : Date;
  lieu? : string;


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

//   configurePaginator(): void {
//     if (this.paginator && this.festivalsTab) {

//       this.paginator.length = this.festivalsTab.length;
//       this.paginator.pageSize = 10;
//       this.paginator.pageIndex = 0;
//       this.paginator.page.subscribe((event: PageEvent) => {
//         // Gérer l'événement de changement de page ici
//         console.log(event);
//       });
//     }
// }



// pageSize = 10;
// pageIndex = 0;

// pageChanged(event: PageEvent) {
//   this.pageSize = event.pageSize;
//   this.pageIndex = event.pageIndex;
//   this.loadData();
// }

// loadData() {
//   // Calculer l'index de début en fonction de l'index de la page et de la taille de la page
//   const startIndex = this.pageIndex * this.pageSize;

//   // Calculer l'index de fin
//   const endIndex = Math.min(startIndex + this.pageSize, this.festivalsTab.length);

//   // Extraire les données de la liste en fonction de l'index de début et de l'index de fin
//   const paginatedData = this.festivalsTab.slice(startIndex, endIndex);

//   // Utiliser les données paginées
//   console.log('Paginated Data:', paginatedData);
//   this.festivalsTab = paginatedData;
// }


  ngOnDestroy(): void {
    if (this.festivalsSubscription) {
      this.festivalsSubscription.unsubscribe();
    }
  }

}
