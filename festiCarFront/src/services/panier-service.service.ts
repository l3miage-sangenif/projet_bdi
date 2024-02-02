import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Achat } from 'src/models/Achat';
import { Festival } from 'src/models/Festival';

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {
  private panier: BehaviorSubject<Achat[]> = new BehaviorSubject<Achat[]>([]);
  private panierGroupe : BehaviorSubject<{ festival: Festival, achats: any[], numAchats: number[] }[]> =  new BehaviorSubject< { festival: Festival, achats: any[], numAchats: number[] }[]>([]);
  nombreElementsPanier: number = 0;
   
  showPanier = false;
  
  constructor() { 
    const storedPanier = localStorage.getItem('panier');
    this.panier = new BehaviorSubject<Achat[]>(storedPanier ? JSON.parse(storedPanier) : []);
    this.panierGroupe = new BehaviorSubject<{ festival: Festival, achats: any[], numAchats: number[] }[]>([]);
    this.nombreElementsPanier = this.panier.getValue().length;
    this.updateShowPanier();
  }

  viderPanier(): void {
    this.nombreElementsPanier = 0;
    this.panier.next([]);
    localStorage.removeItem('panier'); // Supprimer le panier du stockage local
    this.updateShowPanier();
  }

   
  ajouterElementAuPanier(achat: Achat): void {
    const panierActuel = this.panier.value;
    panierActuel.push(achat);
    this.panier.next(panierActuel);
    this.nombreElementsPanier++;
    localStorage.setItem('panier', JSON.stringify(panierActuel)); 
    this.updateShowPanier();
  }

  
  retirerElementDuPanier(idFestival: number): void {
    const panierActuel = this.panierGroupe.value;
    const index = panierActuel.findIndex(element => element.festival.idFestival === idFestival);
    if (index !== -1) {
      panierActuel.splice(index, 1);
      this.panierGroupe.next(panierActuel);
      this.nombreElementsPanier--;
      this.updateShowPanier();
    }
  }


  getPanier(): BehaviorSubject<Achat[]> {
    return this.panier;
  }

   updateShowPanier(): void {
    this.showPanier = this.panier.getValue().length > 0;
  }


  regrouperParFestival(): { festival: Festival, achats: any[], numAchats: number[] }[] {
    const panier = this.getPanier().getValue();
    const festivalsMap = new Map<number, { festival: Festival, achats: any[], numAchats: number[] }>();

    panier.forEach(achat => {
        achat.etapeAchat.forEach(etapeAchat => {
            const festivalId = etapeAchat.etape.offreCovoiturage.festival.idFestival;
            if (!festivalsMap.has(festivalId)) {
                festivalsMap.set(festivalId, { 
                    festival: etapeAchat.etape.offreCovoiturage.festival, 
                    achats: [], 
                    numAchats: [] 
                });
            }
            festivalsMap.get(festivalId).achats.push(etapeAchat);
            festivalsMap.get(festivalId).numAchats.push(achat.numAchat); 
        });
    });

    return Array.from(festivalsMap.values());
}


getPanierGroupe(): BehaviorSubject<{ festival: Festival, achats: any[], numAchats: number[] }[]> {
  return this.panierGroupe;
}

setPanierGroupe(panierGroupe : { festival: Festival, achats: any[], numAchats: number[] }[]){
  this.panierGroupe.next(panierGroupe);
}






}

