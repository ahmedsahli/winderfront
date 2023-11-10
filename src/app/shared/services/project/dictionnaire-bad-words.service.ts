import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DictionnaireBadWords } from './DictionnaireBadWords';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DictionnaireBadWordsService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  addBadWord(badWord: DictionnaireBadWords): Observable<void> {
    const url = `${this.apiUrl}badword/add-badword`;
    return this.http.post<void>(url, badWord);
  }

  getBadWords(): Observable<DictionnaireBadWords[]> {
    const url = `${this.apiUrl}badword/listbadword`;
    return this.http.get<DictionnaireBadWords[]>(url);
  }

  deleteBadWord(id: number): Observable<void> {
    const url = `${this.apiUrl}badword/deletebadword/${id}`;
    return this.http.delete<void>(url);
  }

  updateBadWord(id: number, badWord: DictionnaireBadWords): Observable<void> {
    const url = `${this.apiUrl}badword/modifierbadword/${id}`;
    return this.http.put<void>(url, badWord);
  }
}
