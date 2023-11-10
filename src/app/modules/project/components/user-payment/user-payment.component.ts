import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'winder-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  redirectProject() {
    this.router.navigate(['/tests/finishSuccess']);
  }
}
