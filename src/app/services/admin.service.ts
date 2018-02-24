import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {isNullOrUndefined} from 'util';
import {JwtHelperService} from '@auth0/angular-jwt';

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
    let body = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<boolean>(this.apiAdmin + '/add', body, {
      headers: AdminService.getTokenHeader().append('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  static getTokenHeader() {
    let headers = new HttpHeaders();
    headers = headers.append('Token', localStorage.getItem('GameTrackerToken'));
    return headers;
  }

  static isAdminLoggedIn() {
    let token = localStorage.getItem('GameTrackerToken');
    let jwt = new JwtHelperService('');
    if (!isNullOrUndefined(token)) {
      if (!jwt.isTokenExpired(token)) {
        return true;
      } else {
        this.logout();
      }
    }
    return false;
  }

  static logout() {
    localStorage.removeItem('GameTrackerToken');
  }

}
