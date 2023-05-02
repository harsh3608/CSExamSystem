import { NgModule } from '@angular/core';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    ExamPageComponent
  ],
  imports: [
    ExamRoutingModule,
    SharedModuleModule,
    QuillModule.forRoot()
  ]
})
export class ExamModule { }
