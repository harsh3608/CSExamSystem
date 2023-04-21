import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { UserGuard } from '../shared-module/guards/user.guard';

const routes: Routes = [{
  path: 'exam/:id',
  component: ExamPageComponent,
  canActivate: [UserGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
