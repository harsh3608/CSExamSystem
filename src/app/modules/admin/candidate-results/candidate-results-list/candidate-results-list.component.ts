import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Table } from 'primeng/table';
import { ResultService } from '../../shared/services/result.service';
import { CandidateResult } from '../../shared/models/candidate-result.models';

@Component({
  selector: 'app-candidate-results-list',
  templateUrl: './candidate-results-list.component.html',
  styleUrls: ['./candidate-results-list.component.css']
})
export class CandidateResultsListComponent implements OnInit{
  loading: boolean = true;
  @ViewChild('dt') table!: Table;
  results: CandidateResult[] = []

  constructor(
    private title: Title,
    private resultService: ResultService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Results');
    setTimeout(() => {
      this.resultService.getCandidateResultList().subscribe({
        next: (res) => {
          this.results = res.response;
        }
      });
      this.loading = false;
    }, 1000);
  }

  clear(table: Table) {
    table.clear();
  }
}
