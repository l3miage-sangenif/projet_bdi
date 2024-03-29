import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achat } from 'src/models/Achat';
import { Festival } from 'src/models/Festival';

@Injectable({
  providedIn: 'root'
})
export class FestiCarService {

  baseUrl = ' https://129.88.210.69:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http : HttpClient){}

  getAllFestival(): Observable<any> {
    const url = `${this.baseUrl}/festival`;
    return this.http.get(url, this.httpOptions);
  }

  getAllFestivalById(idFestival: number): Observable<any> {
    const url = `${this.baseUrl}/festival/${idFestival}`;
    return this.http.get(url, this.httpOptions);
  }

  getAllCovoituragesByFestivalId(idFestival: number): Observable<any> {
    const url = `${this.baseUrl}/covoiturage/${idFestival}`;
    return this.http.get(url, this.httpOptions);
  }

  postPanierWithOutConnectedUser( etape : any ): Observable<any> {
    const url = `${this.baseUrl}/achat`; 
    const body = {
      etape: etape
    };
    return this.http.post(url, body, this.httpOptions);
  }

  postPanierWithConnectedUser(userUid: string,  etape : any): Observable<any> {
    const url = `${this.baseUrl}/achat/${userUid}`;
    const body = {
      userUid: userUid,
      etape: etape
    };
    return this.http.post(url, body, this.httpOptions);
  }

  getAllFestivalsFilter(name: string, domaine: string, dateDebut: string,  longitudeCovoiturage: number, latitudeCovoiturage: number, longitudeFestival: number, latitudeFestival: number): Observable<any> {
    const url = `${this.baseUrl}/festival`;
    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (domaine) params = params.set('domaine', domaine);
    if (dateDebut) params = params.set('dateDebut', dateDebut);
    
    if (longitudeCovoiturage) params = params.set('longitudeCovoiturage', longitudeCovoiturage.toString());
    if (latitudeCovoiturage) params = params.set('latitudeCovoiturage', latitudeCovoiturage.toString());
    if (longitudeFestival) params = params.set('longitudeFestival', longitudeFestival.toString());
    if (latitudeFestival) params = params.set('latitudeFestival', latitudeFestival.toString());
    
    return this.http.get(url, { params: params });
  }

  postUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/utilisateur`;
    return this.http.post(url, user, this.httpOptions);
  }

  getPanierByUser(userUid: string): Observable<any> {
    const url = `${this.baseUrl}/achat/${userUid}`;
    return this.http.get(url, this.httpOptions);
  }

  getPanierByUserNotConnected(achatId: string): Observable<any> {
    const url = `${this.baseUrl}/achat/unknow/${achatId}`;
    return this.http.get(url, this.httpOptions);
  }

  putPanierByAchatId(achatId: string, etape : any , userUid?: string ): Observable<any> {
    const url = `${this.baseUrl}/achat/${achatId}`;
    const body = {
      userUid: userUid,
      etape: etape
    };
    return this.http.put(url, body, this.httpOptions);
  }

  deleteAchatById(achatId: string): Observable<any> {
    const url = `${this.baseUrl}/achat/${achatId}`;
    return this.http.delete(url, this.httpOptions);
  }

  validateAchatById(achatId: string): Observable<any> {
    const url = `${this.baseUrl}/achat/validate/${achatId}`;
    return this.http.put(url, this.httpOptions);
  }


  getUrl(festival : Festival): string{
    var src : string = "";
    if(festival.sousDomaine.domaine.nomDomaine === "Musiques actuelles"){
       src="assets/images/musiquesActuelles.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Livre et littérature"){
      src="assets/images/livreEtLiterature.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Cirque et Arts de la rue"){
      src="assets/images/cirqueEtArt.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Pluridisciplinaire Spectacle vivant"){
      src="assets/images/spectacleVivant.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Cinéma et audiovisuel"){
      src="assets/images/cinemaEtAudiovisuel.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Transdisciplinaire"){
      src="assets/images/trandisciplinaire.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Arts plastiques et visuels"){
      src="assets/images/artPlastiques.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Divers Spectacle vivant"){
      src="assets/images/diversEtVivant.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Danse"){
      src="assets/images/danse.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Pluridisciplinaire Musique"){
      src="assets/images/PluridisciplinaireMusique.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Musiques classiques"){
      src="assets/images/MusiquesClassiques.jpg";
    } else if(festival.sousDomaine.domaine.nomDomaine === "Théâtre"){
      src="assets/images/Théâtre.jpg";
    }
    return src;
  }


getCovoituragefiltered(idFestival: number, nbPlace: number, modele: string ,longitudeCovoiturage: number, latitudeCovoiturage: number): Observable<any> {
  const url = `${this.baseUrl}/covoiturage/${idFestival}`;
  let params = new HttpParams();
 
  if (nbPlace) params = params.set('nbPlace', nbPlace);
  if (modele) params = params.set('modele', modele);
  if (longitudeCovoiturage) params = params.set('longitudeCovoiturage', longitudeCovoiturage.toString());
  if (latitudeCovoiturage) params = params.set('latitudeCovoiturage', latitudeCovoiturage.toString());

  
  return this.http.get(url, { params: params });

}


}