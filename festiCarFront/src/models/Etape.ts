import { LieuCovoiturage } from "./LieuCovoiturage";
import { OffreCovoirage } from "./OffreCovoiturage";

export interface Etape {
  idtrajet: number;
  prix: any;
  heure: any;
  nbPlace? : number;
  lieuCovoiturage: LieuCovoiturage;
  offreCovoiturage?: OffreCovoirage;
}
