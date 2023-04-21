import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminForgetPasswordComponent } from './admin-forget-password/admin-forget-password.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { QuestionsAddComponent } from './questions/questions-add/questions-add.component';
import { QuestionsUpdateComponent } from './questions/questions-update/questions-update.component';
import { TechnologiesAddComponent } from './technologies/technologies-add/technologies-add.component';
import { TechnologiesListComponent } from './technologies/technologies-list/technologies-list.component';
import { TechnologiesUpdateComponent } from './technologies/technologies-update/technologies-update.component';
import { TechnologiesDetailComponent } from './technologies/technologies-detail/technologies-detail.component';
import { QuestionsDetailComponent } from './questions/questions-detail/questions-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import {TableModule} from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CKEditorModule } from 'ckeditor4-angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExamsListComponent } from './exams/exams-list/exams-list.component';
import { ExamsAddComponent } from './exams/exams-add/exams-add.component';
import { AddUsersDialogComponent } from './exams/add-users-dialog/add-users-dialog.component';
import { DropdownModule } from 'primeng/dropdown';
import { MatGridListModule } from '@angular/material/grid-list';
import { PaginatorModule } from 'primeng/paginator';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { CandidatesDialogComponent } from './exams/candidates-dialog/candidates-dialog.component';
import { ExamsRescheduleComponent } from './exams/exams-reschedule/exams-reschedule.component';
import { CandidateResultsListComponent } from './candidate-results/candidate-results-list/candidate-results-list.component';
import { CandidateResultDatailsComponent } from './candidate-results/candidate-result-datails/candidate-result-datails.component';
import { RescheduleCandidateExamComponent } from './exams/reschedule-candidate-exam/reschedule-candidate-exam.component';


@NgModule({
  declarations: [
    AdminForgetPasswordComponent,
    QuestionsListComponent,
    QuestionsAddComponent,
    QuestionsUpdateComponent,
    TechnologiesAddComponent,
    TechnologiesListComponent,
    TechnologiesUpdateComponent,
    TechnologiesDetailComponent,
    QuestionsDetailComponent,
    AdminDashboardComponent,
    AdminMenuComponent,
    ExamsListComponent,
    ExamsAddComponent,
    AddUsersDialogComponent,
    CandidatesDialogComponent,
    ExamsRescheduleComponent,
    CandidateResultsListComponent,
    CandidateResultDatailsComponent,
    RescheduleCandidateExamComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    CKEditorModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    DropdownModule,
    MatGridListModule,
    PaginatorModule,

    SharedModuleModule
  ]
})
export class AdminModule { }
