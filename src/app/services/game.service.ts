import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Game} from '../entities/game';
import {AdminService} from './admin.service';
import {DatePipe} from '@angular/common';

@Injectable()
export class GameService {

  private api = 'http://localhost:8888/GametrackerPublicBackend/api.php/games';
  private apiAdmin = 'http://localhost:8888/GametrackerAdminBackend/api.php/games';

  constructor(private http: HttpClient, private datepipe: DatePipe) { }

  addGame(title: string, developer: string, publisher: string, release_date: Date): Observable<boolean> {
    let body = new HttpParams()
      .set('title', title)
      .set('developer', developer)
      .set('publisher', publisher)
      .set('release_date', this.datepipe.transform(release_date, 'yyyy-MM-ddTHH:mm:ss'));
    return this.http.post<boolean>(this.apiAdmin + '/add', body, {
      headers: AdminService.getTokenHeader().append('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.api);
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(this.api + "/" + id);
  }

  updateGame(game: Game): Observable<boolean> {
    let body = new HttpParams()
      .set('id', game.ID.toString())
      .set('title', game.Title)
      .set('developer', game.Developer)
      .set('publisher', game.Publisher)
      .set('release_date', this.datepipe.transform(game.Release_Date, 'yyyy-MM-ddTHH:mm:ss'));
    return this.http.post<boolean>(this.apiAdmin + "/update", body.toString(), {
      headers: AdminService.getTokenHeader().append('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  deleteGame(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.apiAdmin + "/delete/" + id, {headers: AdminService.getTokenHeader()});
  }

}
