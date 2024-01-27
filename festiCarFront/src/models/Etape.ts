import { LieuCovoiturage } from "./LieuCovoiturage";

export interface Etape {
  idtrajet: number;
  prix: any;
  heure: any;
  lieuCovoiturage: LieuCovoiturage;
}
