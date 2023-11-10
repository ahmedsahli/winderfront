import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectElementComponent } from './components/project-list/project-element/project-element.component';
import { ProjectDetailsBarComponent } from './components/project-details-bar/project-details-bar.component';
import { SidebarModule } from 'primeng/sidebar';
import { PostProjectComponent } from './components/post-project/post-project.component';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChartModule } from 'primeng/chart';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditPostModalComponent } from './components/post-project/edit-post-modal/edit-post-modal.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { AccordionModule } from 'primeng/accordion';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from 'primeng/tooltip';
import { ReclamationUserComponent } from './components/reclamation-user/reclamation-user.component';
import { ListeReclamationComponent } from './components/liste-reclamation/liste-reclamation.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DetailsReclamationFComponent } from './components/details-reclamation-f/details-reclamation-f.component';

import { UserProjectsComponent } from './components/user-projects/user-projects.component';
import { DialogModule } from 'primeng/dialog';
import { UserPaymentComponent } from './components/user-payment/user-payment.component';

const PRIME_MODULES = [
  MegaMenuModule,
  CardModule,
  InputTextModule,
  ChipModule,
  CheckboxModule,
  ButtonModule,
  SidebarModule,
  DividerModule,
  ProgressBarModule,
  InputTextareaModule,
  MultiSelectModule,
  MessageModule,
  RadioButtonModule,
  InputNumberModule,
  ChartModule,
  FileUploadModule,
  AngularEditorModule,
  DynamicDialogModule,
  AccordionModule,
  TooltipModule,
  TableModule,
  DialogModule
];

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectElementComponent,
    ProjectDetailsBarComponent,
    PostProjectComponent,
    EditPostModalComponent,
    ReclamationUserComponent,
    UserProjectsComponent,
    ListeReclamationComponent,
    DetailsReclamationFComponent,
    UserPaymentComponent
  ],
  imports: [CommonModule, ProjectRoutingModule, FormsModule, ReactiveFormsModule, ...PRIME_MODULES, HttpClientModule, SharedModule, TableModule, TagModule, DialogModule]
})
export class ProjectModule {}
