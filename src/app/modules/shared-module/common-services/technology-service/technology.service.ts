import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technology, TechnologyResponse, TechnologyStack } from '../../../user/shared/models/technology.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { technologyServerUrl } from 'src/app/modules/shared-module/common-server-links';

@Injectable({
  providedIn: 'any'
})
export class TechnologyService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllTechnologies(): Observable<TechnologyStack> {
    return this.http.get<TechnologyStack>(technologyServerUrl + '/GetAllAsync', { headers: this.headers });
  }

  getTechnologyById(id:number): Observable<TechnologyResponse> {
    return this.http.get<TechnologyResponse>(technologyServerUrl + '/GetById?id='+id, { headers: this.headers });
  }

}
