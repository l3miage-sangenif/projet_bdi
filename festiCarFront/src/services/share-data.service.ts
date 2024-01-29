import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
}

