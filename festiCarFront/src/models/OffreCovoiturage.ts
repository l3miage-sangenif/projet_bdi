import { Etape } from "./Etape";
import { Festival } from "./Festival";
import { Utilisateur } from "./Utilisateur";

export interface OffreCovoirage {
  idOffreCovoiturage: number;
  nbPlace: number;
  numImmatriculation: string;
  modele: string;
  couleur: string;
  conducteur: Utilisateur;
  festival: Festival;
  etape: Etape[];
}