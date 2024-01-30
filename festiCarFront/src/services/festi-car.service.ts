import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Festival } from 'src/models/Festival';

@Injectable({
  providedIn: 'root'
})
export class FestiCarService {

  baseUrl = ' http://129.88.210.61:8080/api';

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

  postPanierWithOutConnectedUser(nbPlace : any, etape : any ): Observable<any> {
    const url = `${this.baseUrl}/achat`; 
    const body = { nbPlace: nbPlace, etape: etape };
    return this.http.post(url, body);
  }

  postPanierWithConnectedUser(userUid: string, nbPlace: number, etape: any[]): Observable<any> {
    const url = `${this.baseUrl}/achat/${userUid}`;
    const body = {
      nbPlace: nbPlace,
      etape: etape
    };
    return this.http.post(url, body, this.httpOptions);
  }

  getAllFestivalsFilter(name: string, domaine: string, dateDebut: string, dateFin: string, longitudeCovoiturage: number, latitudeCovoiturage: number, distanceRechercheCovoiturage: number): Observable<any> {
    const url = `${this.baseUrl}/festival`;
    let params = new HttpParams();
    if (name) params = params.set('name', name);
    if (domaine) params = params.set('domaine', domaine);
    if (dateDebut) params = params.set('dateDebut', dateDebut);
    if (dateFin) params = params.set('dateFin', dateFin);
    if (longitudeCovoiturage) params = params.set('longitudeCovoiturage', longitudeCovoiturage.toString());
    if (latitudeCovoiturage) params = params.set('latitudeCovoiturage', latitudeCovoiturage.toString());
    if (distanceRechercheCovoiturage) params = params.set('distanceRechercheCovoiturage', distanceRechercheCovoiturage.toString());
    
    return this.http.get(url, { params: params });
  }

  postUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/utilisateur`;
    return this.http.post(url, user, this.httpOptions);
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
    }
    return src;
  }
}
