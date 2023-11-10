import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'winder-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Output() logoutEvent = new EventEmitter<void>();
  constructor(private userservice: UserService) {
    console.log('profile component');
  }

  name = localStorage.getItem('nom');
  prenom = localStorage.getItem('prenom');
  email = localStorage.getItem('email');

  logout() {
    this.userservice.logoutUser();
    this.logoutEvent.emit();
  }
}
