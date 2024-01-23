import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestiCarService {

  baseUrl = 'http://localhost:8080/api';

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
}
