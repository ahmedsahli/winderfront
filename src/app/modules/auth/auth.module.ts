import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, AuthRoutingModule, TableModule,FileUploadModule ,ChipsModule, ButtonModule, ChipModule, InputMaskModule, ReactiveFormsModule,FormsModule]
})
export class AuthModule {



}
