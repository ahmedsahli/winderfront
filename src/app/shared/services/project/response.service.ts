import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData } from './ResponseData';
import { Response } from './response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllResponses(): Observable<ResponseData[]> {
    return this.http.get<ResponseData[]>(`${this.baseUrl}response/listResponses`);
  }

  addResponse(ResponseData: ResponseData, idReclamation: number): Observable<any> {
    return this.http.post(`${this.baseUrl}response/add-response/${idReclamation}`, ResponseData);
  }

  deleteResponse(idResponse: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}response/deleteResponse/${idResponse}`);
  }

  updateResponse(ResponseData: ResponseData, idResponse: number): Observable<any> {
    return this.http.put(`${this.baseUrl}response/modifierResponse/${idResponse}`, ResponseData);
  }

  getResponsesByReclamation(idReclamation: number): Observable<ResponseData[]> {
    const url = `${this.baseUrl}response/getResponsesByReclamation/${idReclamation}`;
    return this.http.get<ResponseData[]>(url);
  }

  getResponsesByReclamationn(idReclamation: number): Observable<Response[]> {
    console.log('ok');
    const url = `${this.baseUrl}/getResponsesByReclamation/${idReclamation}`;
    return this.http.get<Response[]>(url);
  }
}
