import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {
  private panierSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public panier$: Observable<any[]> = this.panierSubject.asObservable();
  nombreElementsPanier: number = 0;
  
  constructor() { }

  ajouterAuPanier() {
    this.nombreElementsPanier++;
  }

  mettreAJourPanier(panierData: any[]): void {
    this.panierSubject.next(panierData);
  }

  obtenirPanier(): Observable<any[]> {
    return this.panier$;
  }
}
