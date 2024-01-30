import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {
  nombreElementsPanier: number = 0;
  
  constructor() { }

  ajouterAuPanier() {
    this.nombreElementsPanier++;
  }
}
