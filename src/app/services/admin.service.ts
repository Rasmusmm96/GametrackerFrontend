import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AdminService {

  private apiAdmin = 'http://localhost:8888/GametrackerAdminBackend/api.php/admin';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

    return this.http.get(this.apiAdmin + '/login', {headers: headers}).switchMap(res => {
      localStorage.setItem('GameTrackerToken', res['Token']);
      return Observable.of(localStorage.getItem('Token'));
    });
  }

  addAdmin(username: string, password: string): Observable<boolean> {
    let headers = AdminService.getTokenHeader();
    headers = headers.append('Authorization', 'Basic: ' + btoa(username + ":" + password));
    return this.http.post<boolean>(this.apiAdmin + '/add', null, {headers: headers});
  }

  static getTokenHeader() {
    let headers = new HttpHeaders();
    headers = headers.append('Token', localStorage.getItem('GameTrackerToken'));
    return headers;
  }

}