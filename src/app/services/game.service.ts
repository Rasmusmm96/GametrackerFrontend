import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Game} from '../entities/game';

@Injectable()
export class GameService {

  private api = 'http://localhost:8888/api.php/games';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.api);
  }

  addGame(title: string, developer: string, publisher: string, release_date: Date): Observable<boolean> {
    let attrs = "/add/" + title + "/" + developer + "/" + publisher + "/" + release_date;
    return this.http.post<boolean>(this.api + attrs, null);
  }

}
