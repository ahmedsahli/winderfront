import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../../../../shared/user.service";

@Component({
  selector: 'winder-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  accountType = 'client';
  RegisterForm!: FormGroup;
  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.min(8)]],
      userName: ['', [Validators.required, Validators.min(6)]],
      nom: ['', [Validators.required, Validators.min(6)]],
      prenom: ['', [Validators.required, Validators.min(6)]],
      role1: ['', [Validators.required]]
    });
  }



  register() {
    const emailControl = this.RegisterForm.get('email');
    const email = emailControl ? emailControl.value : null;

    const nomControl = this.RegisterForm.get('nom');
    const nom = nomControl ? nomControl.value : null;

    const prenomControl = this.RegisterForm.get('prenom');
    const prenom = prenomControl ? prenomControl.value : null;


    const passwordControl = this.RegisterForm.get('password');
    const password = passwordControl ? passwordControl.value : null;

    const genderControl = this.RegisterForm.get('gender');
    const gender = genderControl ? genderControl.value : null;

    const role1Control = this.RegisterForm.get('role1');
    const role1 = role1Control ? role1Control.value : null;


    const userNameControl = this.RegisterForm.get('userName');
    const UserName = userNameControl ? userNameControl.value : null;

    const phoneNumberControl = this.RegisterForm.get('phoneNumber');
    const phoneNumber = phoneNumberControl ? phoneNumberControl.value : null;

    //const confirmPasswordControl = this.RegisterForm.get('confirmPassword');
    //const confirmPassword = confirmPasswordControl ? confirmPasswordControl.value : null;



/*

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }*/

    this.authService.signUp(this.RegisterForm.value).subscribe(
      () => {
        console.log('User signed up successfully.');
        this.router.navigate(["/auth/login"]);
      },
    );

  }




}
