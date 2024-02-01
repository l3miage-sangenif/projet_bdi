
import { EtapeAchat } from "./EtapeAchat";
import { Utilisateur } from "./Utilisateur";


export interface Achat {
    numAchat: number;
    nbPlace: number;
    achatValidee: boolean;
    utilisateur: Utilisateur;
    etapeAchat: EtapeAchat[];
  }