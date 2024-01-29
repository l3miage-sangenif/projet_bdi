import { Departement } from "./Departement";

export interface Commune {
  codeINSEE: string;
  nomCommune: string;
  codePostal: number;
  departement: Departement;
}
