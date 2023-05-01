import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsCrudService } from '../../shared/services/questions-crud.service';
import { Question, } from 'src/app/modules/shared-module/models/question.model';
import { Table } from 'primeng/table';
import { Title } from '@angular/platform-browser';
import { TechnologyService } from 'src/app/modules/shared-module/common-services/technology-service/technology.service';
import { Technology } from 'src/app/modules/user/shared/models/technology.model';
import { ExperienceLevels } from 'src/app/modules/shared-module/common-enums';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css'],
})
export class QuestionsListComponent implements OnInit {
  questions: Question[] = [];
  loading: boolean = false;
  @ViewChild('dt') table!: Table;
  technologies: Technology[] = [];
  tech: string = '';
  levels = ExperienceLevels;
  experience: string[] = ['Beginner', 'Intermediate', 'Expert'];
  first: number = 0;
  rows: number = 10;
  isLoading: boolean = true;

  constructor(
    private questionsService: QuestionsCrudService,
    private title: Title,
    private technologyService: TechnologyService,
  ) { }

  ngOnInit(): void {
    //debugger;
    this.title.setTitle('Manage Questions');
    //console.log(this.questions);
    this.questionsService.getAllQuestionsAsync().subscribe({
      next: (res) => {
        res.response.forEach(element => {
          this.questions.push({
            ...element,
            isActiveVM: element.isActive ? "Yes" : "No",
            experienceLevelVM: this.getExperienceLevels(element.experienceLevelId),
            technologyVM: this.getTechById(element.technologyId)
          });
        });

        //this.questions = res.response;
        //console.log(this.questions);
      }
    });
    // Timer for spinner
    setTimeout(() => {

      this.isLoading = false;
    }, 1000);

    this.technologyService.getAllTechnologies().subscribe({
      next: (res) => {
        this.technologies = res.response;
      }
    });

  }

  getTechById(id: number): string {
    this.technologies.map(element => {
      if (id == element.id) {
        this.tech = element.technologyName;
      };
    })
    return this.tech;
  }

  getExperienceLevels(id: number) {
    return this.levels[id - 1];
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
