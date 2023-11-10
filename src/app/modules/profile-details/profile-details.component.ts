import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'winder-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements  OnInit{

  username : any = localStorage.getItem('userName');
  user: any = {
    nom: '',
    prenom: '',
    email: '',
    userName: '',
    gender: '',
    role: ''
  };

  constructor(private userService: UserService,private route: Router) { }

  ngOnInit() {
    this.userService.getuser(this.username).subscribe(
      (response: any) => {
        this.user = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.userService.update(this.user,this.username).subscribe(
      (response: any) => {
        console.log(response);
        this.route.navigate(['/project']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



}
