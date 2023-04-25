import { NgModule } from '@angular/core';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    ExamPageComponent
  ],
  imports: [
    ExamRoutingModule,
    SharedModuleModule
  ]
})
export class ExamModule { }
