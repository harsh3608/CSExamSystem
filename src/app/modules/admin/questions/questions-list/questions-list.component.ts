import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsCrudService } from '../../shared/services/questions-crud.service';
import { Question, } from 'src/app/modules/shared-module/models/question.model';
import { Table } from 'primeng/table';
import { Title } from '@angular/platform-browser';
import { TechnologyService } from 'src/app/modules/shared-module/common-services/technology-service/technology.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css'],
})
export class QuestionsListComponent implements OnInit {
  questions: Question[] = [];
  loading: boolean = false;
  @ViewChild('dt') table!: Table;
  tech: string = '';
  first: number = 0;
  rows: number = 10;
  isLoading: boolean = true;

  constructor(
    private questionsService: QuestionsCrudService,
    private title: Title,
    private technologyService: TechnologyService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Manage Questions');
    this.getQuestions();
  }

  getQuestions() {
    this.questionsService.getAllQuestionsAsync().subscribe( (res) => {
        if(res.isSuccess){
          this.questions = res.response;
          this.isLoading = false;
        };
      }
    );
  }

  clear(table: Table) {
    table.clear();
    const inputElement = document.getElementById('search') as HTMLInputElement;
    inputElement.value = '';
  }

  onPageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
