import { Commune } from "./Commune";
import { Organisateur } from "./Organisateur";
import { SousDomaine } from "./SousDomaine";

export interface Festival {
  idFestival: number;
  nomManifestation: string;
  dateDebut: string;
  dateFin: string;
  siteWeb: string;
  nbPlace: number;
  tarif: any;
  nbPlaceRestante: number;
  sousDomaine: SousDomaine;
  commune: Commune;
  organisateurs: Organisateur[];
}
