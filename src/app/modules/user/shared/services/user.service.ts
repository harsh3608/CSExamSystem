import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatesReturnResponse, ReturnResponse, User, UserAddReturnResponse, UserLogin } from '../models/user.model';
import { Observable } from 'rxjs';
import { candidateServerUrl, userLoginServerUrl } from 'src/app/modules/shared-module/common-server-links';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  loginCandidate(user: UserLogin): Observable<ReturnResponse> {
    return this.http.post<ReturnResponse>(userLoginServerUrl + '/SignIn', user);
  }

  registerUser(user: User): Observable<UserAddReturnResponse> {
    return this.http.post<UserAddReturnResponse>(candidateServerUrl+'/RegisterUser', user);
  }

  getAllUsers(): Observable<CandidatesReturnResponse> {
    return this.http.get<CandidatesReturnResponse>(candidateServerUrl+'/GetAllUsersAsync?pageIndex=1&pageSize=100')
  }

}
