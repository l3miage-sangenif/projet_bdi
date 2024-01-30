import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { OffreCovoirage } from 'src/models/OffreCovoiturage';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }

  private covoiturageTabSource = new BehaviorSubject<OffreCovoirage[]>([]);
  covoiturageTab$ = this.covoiturageTabSource.asObservable();

  updateCovoiturageTab(data: OffreCovoirage[]): void {
    this.covoiturageTabSource.next(data);
  }
  private festivalTabSource = new BehaviorSubject<Festival[]>([]);
  festivalsTab$ = this.festivalTabSource.asObservable();

  updatefestivalTab(data: Festival[]): void {
    this.festivalTabSource.next(data);
  }

  private showFestivalsSource = new BehaviorSubject<boolean>(false);
  showFestivals$ = this.showFestivalsSource.asObservable();
  updateShowFestivals(show: boolean): void {
    this.showFestivalsSource.next(show);
  }
}

