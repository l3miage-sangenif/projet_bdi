import { LieuCovoiturage } from "./LieuCovoiturage";

export interface Etape {
  idtrajet: number;
  prix: any;
  heure: any;
  nbPlacesSaisies? : number;
  lieuCovoiturage: LieuCovoiturage;
}
