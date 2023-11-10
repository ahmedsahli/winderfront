import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EncryptionService } from './encryption.service';
import { User } from '../modules/auth/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public data: any;
  private apiUrl = environment.baseUrl; // replace with your API endpoint
  constructor(private encryptionService: EncryptionService, private http: HttpClient, private router: Router) {}

  login(userName: string, password: string) {
    const body = { userName, password };
    return this.http.post(`${this.apiUrl}authenticate`, body);
  }

  signUp(body: FormBuilder): Observable<any> {
    console.log(body);

    return this.http.post(`${this.apiUrl}registerNewUser`, body);
  }

  getToken() {
    console.log(localStorage.getItem('data')!);
    if (localStorage.getItem('data') != null) {
      this.data = this.encryptionService.decrypt(localStorage.getItem('data')!);
      console.log(this.data);
      return this.data['token'];
    }
    return null;
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('nom');
    localStorage.removeItem('role1');
    localStorage.removeItem('prenom');
    localStorage.removeItem('email');
    localStorage.removeItem('gender');
    localStorage.removeItem('userName');
    this.router.navigate(['/auth/login']);
  }

  IsLoggedIn() {
    return !!localStorage.getItem('token');
  }

  forget(body: any) {
    return this.http.post(this.apiUrl + 'reset', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  reset(body: any) {
    return this.http.post(this.apiUrl + 'reset_password', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  otp(body: any) {
    console.log(body);

    return this.http.post(this.apiUrl + 'otp', body, {
      observe: 'response',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  // Crud User w fonctionalité avancé
  /*
  update(body: any) {
    return this.http.put(this.apiUrl + '/updateUser', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }*/

  update(user: any, username: string): Observable<any> {
    return this.http.put(`${this.apiUrl}updateUser/${username}`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public getusernames() {
    return this.http.get(this.apiUrl + 'usernames');
  }

  public getuser(username: any) {
    return this.http.get(this.apiUrl + 'getUser/' + username);
  }

  /*
  getuser(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUser/${username}`);
  }*/

  getroles() {
    return this.http.get(this.apiUrl + 'getallroles');
  }

  // affichage All users
  getusers() {
    return this.http.get(this.apiUrl + 'users');
  }

  deleteUser(userName: string) {
    const url = `${this.apiUrl}/delete/${userName}`;
    return this.http.delete(url);
  }

  updateUser(user: User, userName: string): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}updateUser/${userName}`, user);
  }

  // I will use it in pie chart
  countUsersByRole(): Observable<any> {
    return this.http.get(`${this.apiUrl}count-by-role`);
  }
}
