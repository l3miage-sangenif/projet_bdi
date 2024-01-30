import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { FestiCarService } from 'src/services/festi-car.service';
import { ShareDataService } from 'src/services/share-data.service';


@Component({
  selector: 'app-liste-festivals',
  templateUrl: './liste-festivals.component.html',
  styleUrls: ['./liste-festivals.component.scss']
})
export class ListeFestivalsComponent implements OnInit {
  
  festivalsTab? : Festival[];
  festivalsSubscription: Subscription;
  pagedFestivals: Festival[] = [];
  pageSize = 10;
  pageSizeOptions = [5, 10, 20, 50, 100];
  totalFestivals = 0;

  showFestivals = true;


  constructor(public festivalCarService : FestiCarService, private shareDataService: ShareDataService){

    this.festivalsSubscription = this.shareDataService.festivalsTab$.subscribe((data) => {
      this.festivalsTab = data;
      if (this.showFestivals) {
        this.updatePagedFestivals(0); 
        this.totalFestivals = this.festivalsTab.length;

      }
    });
  }

  ngOnInit(): void {
    this.getAllFestivals();
    this.pageSize = this.pageSizeOptions[0];
  }

  public getAllFestivals(): void {
    this.festivalsSubscription = this.festivalCarService.getAllFestival().subscribe({
      next: (data: any) => {
        this.festivalsTab = data;
        console.log('Festivals Data:', data);
        this.totalFestivals = this.festivalsTab.length;
        if (this.showFestivals) {
          this.updatePagedFestivals(0); 
        }
      },
      error: (error: any) => {
        console.error('Error fetching festivals:', error);
      }
    });
  
  }

  getUrl(festival : Festival): string{
   return this.festivalCarService.getUrl(festival);
  }

  public updatePagedFestivals(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalFestivals);
    this.pagedFestivals = this.festivalsTab.slice(startIndex, endIndex);
  }

  public onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.updatePagedFestivals(event.pageIndex);
  }

  ngOnDestroy(): void {
    if (this.festivalsSubscription) {
      this.festivalsSubscription.unsubscribe();
    }
  }

}
