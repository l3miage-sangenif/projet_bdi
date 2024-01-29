import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    else if(festival.sousDomaine.domaine.nomDomaine === "Divers spectacle vivant"){
      src="assets/images/diversEtVivant.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Danse"){
      src="assets/images/danse.jpg";
    }
    return src;
  }
}
