import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from './reclamation';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  addReclamations(reclamation: Reclamation, userName: any): Observable<void> {
    console.log(userName);

    return this.http.post<void>(`${this.baseUrl}reclamation/add-reclamation/` + userName, reclamation);
  }

  listReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}reclamation/listReclamations`);
  }

  deleteReclamation(idReclamation: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}reclamation/deleteReclamation/${idReclamation}`);
  }

  updateReclamation(idReclamation: number, reclamation: Reclamation): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}reclamation/modifierReclamation/${idReclamation}`, reclamation);
  }

  getReclamationById(idReclamation: number): Observable<Reclamation> {
    return this.http.get<Reclamation>(`${this.baseUrl}reclamation/getReclamation/${idReclamation}`);
  }

  listerReclamationParDate(datedate: Date): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}getReclamationByDate/${datedate}`);
  }

  reclamationAujourdhui(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(`${this.baseUrl}ReclamationAujourdhui`);
  }

  nombresReclamationAujourdhui(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}reclamation/nombresReclamationAujourdhui`);
  }

  getReclamationsByUser(userName: any): Observable<Reclamation[]> {
    // const url = `${this.apiUrl}/getreclamationparuser/${userName}`;
    //  return this.http.get<Reclamation[]>(url);
    return this.http.get<Reclamation[]>(`${this.baseUrl}reclamation/getreclamationparuser/${userName}`);
  }
}
