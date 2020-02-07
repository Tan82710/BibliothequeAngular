import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Livre } from './livre'

@Injectable({
  providedIn: 'root'
})
export class BibliothequeService {

bibliothequeURL = "http://localhost:5000/livres"

  constructor(private http : HttpClient) { }

  getLivres() : Observable<Livre[]>{
    return this.http.get<Livre[]>(this.bibliothequeURL)
  }

  addLivres(numero: number, titre: string, pages:[string]): Observable<Livre>{
    return this.http.post<Livre>(this.bibliothequeURL,{"numero":numero, "titre":titre, "pages":pages})
  }

  deleteLivres(num: number): Observable<Livre> {
    return this.http.delete<Livre>(this.bibliothequeURL+"/"+num)
  }

  updateLivres(l: Livre): Observable<Livre> {
    return this.http.put<Livre>(this.bibliothequeURL, l)
  }

}