import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  postProject(body: any, email: any) {
    return this.http.post(this.baseUrl + 'addProject/' + email, body);
  }
  getAllProjects(): Observable<any> {
    return this.http.get(this.baseUrl + 'allProjects');
  }
  deleteProject(id: number) {
    return this.http.delete(this.baseUrl + 'deleteProject/' + id);
  }

  countProjects(): Observable<any> {
    return this.http.get(this.baseUrl + 'countProjects');
  }

  getProjectById(email: any): Observable<any> {
    return this.http.get(this.baseUrl + 'projectByUserEmail/' + email);
  }
}
