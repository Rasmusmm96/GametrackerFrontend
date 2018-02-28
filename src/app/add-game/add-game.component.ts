import { Component, OnInit } from '@angular/core';
import {Game} from '../entities/game';
import {GameService} from '../services/game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  title: string;
  developer: string;
  publisher: string;
  release_date: Date;
  twitter_handle: string;
  youtube_id: string;

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
  }

  addGame() {
    this.gameService.addGame(
      this.title,
      this.developer,
      this.publisher,
      this.release_date,
      this.twitter_handle,
      this.youtube_id
    ).subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}
