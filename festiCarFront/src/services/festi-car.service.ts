import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
