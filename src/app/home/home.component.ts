import { Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service';
import {Game} from '../entities/game';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  openGame(game: Game) {
    this.router.navigate(['/game/' + game.ID]);
  }

}
