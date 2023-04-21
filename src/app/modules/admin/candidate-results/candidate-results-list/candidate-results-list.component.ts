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
export class CandidateResultsListComponent implements OnInit {
  loading: boolean = false;
  @ViewChild('dt') table!: Table;
  results: CandidateResult[] = [];
  isLoading: boolean = true;

  constructor(
    private title: Title,
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Results');
    this.resultService.getCandidateResultList().subscribe({
      next: (res) => {
        this.results = res.response;
      }
    });
    //spinner timer
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  clear(table: Table) {
    table.clear();
  }
}
