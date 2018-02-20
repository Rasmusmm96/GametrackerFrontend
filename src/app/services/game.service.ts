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

}
