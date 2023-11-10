import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ChartModule } from 'primeng/chart';
import { AdminComponent } from './admin.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MeetingsComponent } from './meetings/meetings.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ProjectListComponent } from './project-list/project-list.component';
import { DialogModule } from 'primeng/dialog';
import { ReclamationComponent } from './reclamation/reclamation.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {TagModule} from "primeng/tag";
import {RatingModule} from "primeng/rating";
import {FileUploadModule} from "primeng/fileupload";
import { ReclamationDetailsComponent } from './reclamation-details/reclamation-details.component';
import { BadwordRecComponent } from './badword-rec/badword-rec.component';
import { AddBadwordRecComponent } from './add-badword-rec/add-badword-rec.component';
import {DividerModule} from "primeng/divider";
import {InputTextareaModule} from "primeng/inputtextarea";

import { UsersListComponent } from './users-list/users-list.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const PRIME_MODULES = [ChartModule, MenuModule, TableModule, SlideMenuModule, TableModule, ButtonModule, DialogModule];

@NgModule({

  declarations: [AdminDashboardComponent, AdminComponent, MeetingsComponent, ProjectListComponent, ReclamationComponent, UsersListComponent, PieChartComponent, ReclamationDetailsComponent, BadwordRecComponent, AddBadwordRecComponent],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    ...PRIME_MODULES,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ToastModule,
    ToolbarModule,
    TagModule,
    RatingModule,
    FileUploadModule,
    DividerModule,
    InputTextareaModule
  ]
})
export class AdminModule {}
