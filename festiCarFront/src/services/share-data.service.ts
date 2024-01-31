import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { OffreCovoirage } from 'src/models/OffreCovoiturage';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private selectedAddressDetails: any = {};
  private covoiturageTabSource = new BehaviorSubject<OffreCovoirage[]>([]);
  private festivalTabSource = new BehaviorSubject<Festival[]>([]);
  private showFestivalsSource = new BehaviorSubject<boolean>(false);

  constructor() { }

  covoiturageTab$ = this.covoiturageTabSource.asObservable();
  festivalsTab$ = this.festivalTabSource.asObservable();
  showFestivals$ = this.showFestivalsSource.asObservable();
  

  updateCovoiturageTab(data: OffreCovoirage[]): void {
    this.covoiturageTabSource.next(data);
  }


  updateFestivalTab(data: Festival[]): void {
    this.festivalTabSource.next(data);
  }

 
  updateShowFestivals(show: boolean): void {
    this.showFestivalsSource.next(show);
  }

 
  updateSelectedAddressDetails(details: any): void {
    this.selectedAddressDetails = details;
  }

  getSelectedAddressDetails(): any {
    return this.selectedAddressDetails;
  }
}

