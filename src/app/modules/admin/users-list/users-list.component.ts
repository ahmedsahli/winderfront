import { Component } from '@angular/core';
import {UserService} from "../../../shared/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'winder-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  users!: Observable<any>;

  constructor(private userservice : UserService) {
  }


  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.userservice.getusers();
  }
  delete(username: string) {
    this.userservice.deleteUser(username).subscribe(() => {
      this.loadUsers();
    });
  }









}
