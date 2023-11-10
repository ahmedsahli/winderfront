import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnScrollDirective } from './shared/directives/on-scroll.directive';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DockModule } from 'primeng/dock';
import { AnimateModule } from 'primeng/animate';
import { MegaMenuModule } from 'primeng/megamenu';
import { HttpClientModule } from '@angular/common/http';
import { QuestionAdminComponent } from './modules/question/question-admin/components/question-admin.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { PostTestComponent } from './modules/test/test-admin/components/post-test/post-test.component';
import { RedirectToTestComponent } from './modules/test/redirect-to-test/redirect-to-test.component';

import { ResetPasswordComponent } from './modules/reset-password/reset-password/reset-password.component';
import { NgProgressModule } from 'ngx-progressbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './modules/reset/reset/reset.component';
import { SharedModule } from './shared/shared.module';
import { ProfileComponent } from './modules/profile/profile.component';
import { ProfileDetailsComponent } from './modules/profile-details/profile-details.component';
import { DialogModule } from 'primeng/dialog';
import { FinishScreenFailComponent } from './modules/test/finish-screen-fail/finish-screen-fail.component';
import { FinishScreenComponent } from './modules/test/finish-screen/finish-screen.component';
import { AddProposalComponent } from './modules/proposal/add-proposal/add-proposal.component';
import { ProposalfComponent } from './modules/proposal/proposalf/proposalf.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OnScrollDirective,
    ResetPasswordComponent,
    ResetComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    QuestionAdminComponent,
    FinishScreenComponent,
    FinishScreenFailComponent,
    RedirectToTestComponent,
    AddProposalComponent,
    ProposalfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DockModule,
    AnimateModule,
    MegaMenuModule,
    HttpClientModule,
    NgProgressModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    DialogModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
