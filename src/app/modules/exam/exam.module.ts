import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExamRoutingModule } from './exam-routing.module';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ExamPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ExamRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatGridListModule,

    SharedModuleModule
  ]
})
export class ExamModule { }
