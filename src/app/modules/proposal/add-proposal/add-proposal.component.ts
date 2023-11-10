import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProposalServiceService } from 'src/app/shared/services/proposal/proposal-service.service';

@Component({
  selector: 'winder-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.scss']
})
export class AddProposalComponent {
  proposal = {
    client: '',
    status: '',
    cover_letter: '',
    price: 0
  };
  submitted = false;

  constructor(private proposalService: ProposalServiceService, private router: Router) {}

  onSubmit(): void {
    const data = {
      client: this.proposal.client,
      status: this.proposal.status,
      cover_letter: this.proposal.cover_letter,
      price: this.proposal.price
    };

    this.proposalService.addProposal(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        window.location.reload();
        console.log(data);

        this.router.navigate(['/proposal']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newProposal(): void {
    this.submitted = false;
    this.proposal = {
      client: '',
      status: '',
      cover_letter: '',
      price: 0
    };
  }
}
