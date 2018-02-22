import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Game} from '../entities/game';
import {AdminService} from './admin.service';

@Injectable()
export class GameService {

  private api = 'http://localhost:8888/GametrackerPublicBackend/api.php/games';
  private apiAdmin = 'http://localhost:8888/GametrackerAdminBackend/api.php/games';

  constructor(private http: HttpClient) { }

  addGame(title: string, developer: string, publisher: string, release_date: Date): Observable<boolean> {
    let attrs = "/add/" + title + "/" + developer + "/" + publisher + "/" + release_date;
    return this.http.post<boolean>(this.apiAdmin + attrs, null, {headers: AdminService.getTokenHeader()});
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.api);
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(this.api + "/" + id);
  }

  updateGame(game: Game): Observable<boolean> {
    let attrs = "/update/" + game.ID + "/" + game.Title + "/" + game.Developer + "/" + game.Publisher + "/" + game.Release_Date;
    return this.http.put<boolean>(this.apiAdmin + attrs, null,{headers: AdminService.getTokenHeader()});
  }

  deleteGame(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.apiAdmin + "/delete/" + id, {headers: AdminService.getTokenHeader()});
  }

}
