import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProposalServiceService } from 'src/app/shared/services/proposal/proposal-service.service';
import { Proposal } from '../add-proposal/proposal';

@Component({
  selector: 'winder-proposalf',
  templateUrl: './proposalf.component.html',
  styleUrls: ['./proposalf.component.scss']
})
export class ProposalfComponent implements OnInit {
  proposals: Proposal[] = [];
  clientid: any;

  minPrice = new FormControl('');
  maxPrice = new FormControl('');

  constructor(private proposalService: ProposalServiceService, private route: ActivatedRoute, private router: Router, private _formBuilder: FormBuilder) {}

  proposal = {
    minPrice: '',
    maxPrice: ''
  };

  firstFormGroup = this._formBuilder.group({
    minPrice: [''],
    maxPrice: ['']
  });

  ngOnInit() {
    this.getProposals();
  }
  onSubmit() {
    const data = {
      minPrice: this.proposal.minPrice,
      maxPrice: this.proposal.maxPrice
    };
    console.log('testestestez' + data.maxPrice);
    console.log('testestestez' + data.minPrice);

    this.proposalService.filterProposals(data.minPrice, data.maxPrice).subscribe((res) => (this.proposals = res));
  }
  setclientid(cid: any) {
    this.clientid = '';
    this.clientid = cid;
  }

  getProposals(): void {
    this.proposalService.getProposalList().subscribe((res) => {
      this.proposals = res;
      console.log(res);
    });
  }
}
