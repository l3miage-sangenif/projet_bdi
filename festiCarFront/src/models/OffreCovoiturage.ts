import { Etape } from "./Etape";

export interface OffreCovoirage {
  idOffreCovoiturage: number;
  nbPlace: number;
  numImmatriculation: string;
  modele: string;
  couleur: string;
  conducteur: any;
  festival: any;
  etape: Etape[];
}
