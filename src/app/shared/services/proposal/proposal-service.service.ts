import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proposal } from 'src/app/modules/proposal/add-proposal/proposal';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProposalServiceService {
  baseUrl = environment.baseUrl;
  getProposal(idProposal: any) {
    return this.http.get(this.baseUrl + 'Proposal/getPropById/' + idProposal);
  }

  constructor(private http: HttpClient) {}

  getProposalList(): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(`${this.baseUrl}Proposal/list`);
  }
  addProposal(proposal: any) {
    return this.http.post(this.baseUrl + 'Proposal/addProp', proposal);
  }

  deleteProposal(idproposal: any) {
    return this.http.delete(this.baseUrl + 'Proposal/deleteProp/' + idproposal);
  }
  updateProposal(proposal: any) {
    return this.http.post(this.baseUrl + 'updateProp', proposal);
  }
  filterProposals(minPrice: any, maxPrice: any): Observable<Proposal[]> {
    console.log(maxPrice);
    console.log(minPrice);

    return this.http.get<Proposal[]>(`${this.baseUrl}Proposal/filterbyrange?minPrice=${minPrice}&maxPrice=${maxPrice}`);
  }
}
