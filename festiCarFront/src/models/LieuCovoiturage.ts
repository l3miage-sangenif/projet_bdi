import { Commune } from "./Commune";

export interface LieuCovoiturage {
  idLieu: string;
  nomLieu: string;
  typeLieu: string;
  adresseLieu: string;
  longitude: number;
  latitude: number;
  commune: Commune
}
