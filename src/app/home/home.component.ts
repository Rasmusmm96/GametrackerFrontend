import { Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service';
import {Game} from '../entities/game';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

}
