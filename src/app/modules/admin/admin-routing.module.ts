import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminForgetPasswordComponent } from './admin-forget-password/admin-forget-password.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { TechnologiesListComponent } from './technologies/technologies-list/technologies-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from '../shared-module/guards/auth.guard';
import { QuestionsAddComponent } from './questions/questions-add/questions-add.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { QuestionsUpdateComponent } from './questions/questions-update/questions-update.component';
import { ExamsAddComponent } from './exams/exams-add/exams-add.component';
import { ExamsListComponent } from './exams/exams-list/exams-list.component';
import { PageNotFoundComponent } from '../shared-module/page-not-found/page-not-found.component';
import { ExamsRescheduleComponent } from './exams/exams-reschedule/exams-reschedule.component';
import { CandidateResultsListComponent } from './candidate-results/candidate-results-list/candidate-results-list.component';
import { CandidateResultDatailsComponent } from './candidate-results/candidate-result-datails/candidate-result-datails.component';

const routes: Routes = [{
  path: 'admin-menu',
  component: AdminMenuComponent,
  canActivate: [AuthGuard],
},{
  path: 'admin-dashboard',
  component: AdminDashboardComponent,
  canActivate: [AuthGuard],
},
{
  path: 'admin-forget-password',
  component: AdminForgetPasswordComponent,
},
{
  path: 'technologies-list',
  component: TechnologiesListComponent,
  canActivate: [AuthGuard]
},
{
  path: 'questions-list',
  component: QuestionsListComponent,
  canActivate: [AuthGuard]
},
{
  path: 'questions-add',
  component: QuestionsAddComponent,
  canActivate: [AuthGuard]
},
{
  path: 'questions-update/:id',
  component: QuestionsUpdateComponent,
  canActivate: [AuthGuard]
},
{
  path: 'exams-list',
  component: ExamsListComponent,
  canActivate: [AuthGuard]
},
{
  path: 'exams-add',
  component: ExamsAddComponent,
  canActivate: [AuthGuard]
},
{
  path: 'results-list',
  component: CandidateResultsListComponent,
  canActivate: [AuthGuard]
},
{
  path: 'result-details/:id/:uid/:name',
  component: CandidateResultDatailsComponent,
  canActivate: [AuthGuard]
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
