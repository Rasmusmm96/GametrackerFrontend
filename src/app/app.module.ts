import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {GameService} from './services/game.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RouterModule, Routes} from '@angular/router';
import { AddGameComponent } from './add-game/add-game.component';
import {FormsModule} from '@angular/forms';
import { GameComponent } from './game/game.component';
import {Game} from './entities/game';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addgame', component: AddGameComponent },
  { path: 'game/:id', component: GameComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AddGameComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
