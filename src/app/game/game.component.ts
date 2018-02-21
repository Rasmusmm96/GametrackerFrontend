import { Component, OnInit } from '@angular/core';
import {Game} from '../entities/game';
import {GameService} from '../services/game.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.take(1).subscribe(params => {
      this.gameService.getGame(params['id']).subscribe(game => {
        this.game = game;
      })
    })
  }

  updateGame() {
    this.router.navigate(['updategame/' + this.game.ID]);
  }

  deleteGame() {
    this.gameService.deleteGame(this.game.ID).subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}
