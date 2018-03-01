import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Game} from '../entities/game';
import {GameService} from '../services/game.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';
import {AdminService} from '../services/admin.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Ng4TwitterTimelineService} from 'ng4-twitter-timeline/lib';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game;
  isReleaseDateNull: boolean;

  isAdminLoggedIn: boolean = AdminService.isAdminLoggedIn();

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router,
              private sanatizer: DomSanitizer, private ng4TwitterTimelineService: Ng4TwitterTimelineService) { }

  ngOnInit() {
    this.route.params.take(1).subscribe(params => {
      this.gameService.getGame(params['id']).subscribe(game => {
        this.game = game;
        this.isReleaseDateNull = GameService.isReleaseDateNull(game.Release_Date);
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

  protected youtubeUrl() : SafeUrl {
    return this.sanatizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.game.Youtube_Id);
  }

  protected twitterUrl() : string {
    return 'https://twitter.com/' + this.game.Twitter_Handle;
  }

}
