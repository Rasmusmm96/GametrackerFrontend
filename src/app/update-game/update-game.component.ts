import { Component, OnInit } from '@angular/core';
import {Game} from '../entities/game';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from '../services/game.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {

  game: Game;

  constructor(private route: ActivatedRoute, private gameService: GameService, private datepipe: DatePipe, private router: Router) { }

  ngOnInit() {
    this.route.params.take(1).subscribe(params => {
      this.gameService.getGame(params['id']).subscribe(game => {
        this.game = game;
      })
    })
  }

  updateGame() {
    this.gameService.updateGame(this.game.ID,
                                this.game.Title,
                                this.game.Developer,
                                this.game.Publisher,
                                this.game.Release_Date)
                                .subscribe(res => {
                                  this.router.navigate(['/game/' + this.game.ID]);
                                })
  }

}
