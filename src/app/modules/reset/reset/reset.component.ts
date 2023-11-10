import { Component , OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../shared/user.service";
import {Router} from "@angular/router";
import {EncryptionService} from "../../../shared/encryption.service";

@Component({
  selector: 'winder-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit{
  token!: string;
  user: any;
  userRegister = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@esprit\.tn$/)]),

  })
  constructor(
    private userService: UserService,
    private router: Router, private encryptionService: EncryptionService
  ) { }

  ngOnInit() {
  }
  reset() {
    console.log('Before subscribe method');
    const data = { email: this.userRegister.value };
    console.log('Data:', data);
    const encryptedData = this.encryptionService.encrypt(data);
    console.log('Encrypted data:', encryptedData);
    localStorage.setItem('data', encryptedData);
    console.log('Data stored in local storage:', localStorage.getItem('token'));
    this.userService.forget(this.userRegister.value).subscribe((res: any) => {
      //  this.router.navigate(["/registersuccess"]);
    }, (err: any) => {
      console.log('Error:', err);
      if (err.status == 400) {
        console.log("email existant");
      }
    });
    this.router.navigate(["/reset-password"]);
  }



}
