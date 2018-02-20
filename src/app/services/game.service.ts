import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Game} from '../entities/game';

@Injectable()
export class GameService {

  private api = 'http://localhost:8888/api.php/games';

  constructor(private http: HttpClient) { }

  addGame(title: string, developer: string, publisher: string, release_date: Date): Observable<boolean> {
    let attrs = "/add/" + title + "/" + developer + "/" + publisher + "/" + release_date;
    return this.http.post<boolean>(this.api + attrs, null);
  }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.api);
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(this.api + "/" + id);
  }

  deleteGame(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.api + "/delete/" + id);
  }

}
