import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Achat } from 'src/models/Achat';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {
  private panier: BehaviorSubject<Achat[]> = new BehaviorSubject<Achat[]>([]);
  nombreElementsPanier: number = 0;
   
  showPanier = false;
  
  constructor() { }


  viderPanier(): void {
    this.nombreElementsPanier = 0;
    this.showPanier = false;
    this.panier.next([]);
  }

   
   ajouterElementAuPanier(achat: Achat): void {
    const panierActuel = this.panier.value;
    panierActuel.push(achat);
    this.panier.next(panierActuel);
    this.nombreElementsPanier++;
  }

  
  retirerElementDuPanier(numAchat: number): void {
    const panierActuel = this.panier.value;
    const index = panierActuel.findIndex(element => element.numAchat === numAchat);
    if (index !== -1) {
      panierActuel.splice(index, 1);
      this.panier.next(panierActuel);
      this.nombreElementsPanier--;
    }
  }


  getPanier(): BehaviorSubject<Achat[]> {
    return this.panier;
  }

   updateShowPanier(): void {
    this.showPanier = this.panier.getValue().length > 0;
  }






  // Fonction pour agréger les étapes d'achat pour les festivals ayant le même idFestival
  aggregerEtapesAchat(): any[] {
    const panierActuel = this.panier.getValue();

    // Utiliser un objet pour stocker les étapes d'achat agrégées par idFestival
    const festivals: { [idFestival: number]: any } = {};

    // Parcourir le panier et agréger les étapes d'achat
    panierActuel.forEach(achat => {
      const idFestival = achat.etapeAchat[0]?.etape?.offreCovoiturage?.festival?.idFestival;
      if (idFestival && achat.etapeAchat.length > 0) {
        if (!festivals[idFestival]) {
          festivals[idFestival] = { ...achat }; // Initialiser avec les données du premier achat
        } else {
          // Ajouter les étapes d'achat de l'achat actuel à l'achat agrégé existant
          festivals[idFestival].etapeAchat.push(...achat.etapeAchat);
        }
      }
    });

    // Convertir l'objet en tableau
    const result = Object.keys(festivals).map(key => festivals[key]);
    return result;
  }




}

