import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators,ValidatorFn} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../shared/user.service";
import {EncryptionService} from "../../../shared/encryption.service";

@Component({
  selector: 'winder-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{

  token!: string;
  user: any;
  userRegister = new FormGroup({
    password: new FormControl('', [Validators.required]),
    repassword: new FormControl('', matchValidator('password')),
  })

  otp = new FormGroup({
    otp1: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    otp2: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    otp3: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
    otp4: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),

  })
  otpverified: boolean = false;
  taa!: number;
  data: any;
  email: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private encryptionService: EncryptionService,
  ) { }

  ngOnInit() {
    this.email = this.encryptionService.decrypt(localStorage.getItem('data')!)["email"];
    console.log(this.email);
  }

  reset() {
    if (this.userRegister.value.password == this.userRegister.value.repassword) {
      console.log(this.userRegister.value.password);
      console.log(this.email["email"]);

      this.userService.reset({ "email": this.email["email"] , "password": this.userRegister.value.password })
        .subscribe((res: any) => {
          this.router.navigate(["/auth/login"]);
          console.log(this.user);
        }, (error) => {
          console.error(error);
          // Show error message to the user here
        });
    }
    else {
      console.log("they are not the same ");

    }

  }

  otpfct() {
    this.taa = Number(this.otp.value.otp1! + this.otp.value.otp2! + this.otp.value.otp3! + this.otp.value.otp4!);
    console.log(this.taa);
    console.log(this.email["email"]  );
    this.userService.otp({ "otp": this.taa, "email": this.email["email"] }).subscribe((res: any) => {
      console.log(res);

      this.otpverified = true;

    }, (err) => {
      console.log(err);
    })
  }
  redirect() {
    this.router.navigate(['/reset'])

  }
}



export function matchValidator(
  matchTo: string,
  reverse?: boolean
): ValidatorFn {
  return (control: AbstractControl):
    ValidationErrors | null => {
    if (control.parent && reverse) {
      const c = (control.parent?.controls as any)[matchTo]
      AbstractControl;
      if (c) {
        c.updateValueAndValidity();
      }
      return null;
    }
    return !!control.parent &&
    !!control.parent.value &&
    control.value ===
    (control.parent?.controls as any)[matchTo].value
      ? null
      : { matching: true };
  };



}
