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
import { UpdateGameComponent } from './update-game/update-game.component';
import {DatePipe} from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AdminService} from './services/admin.service';
import {AdminGuard} from './guards/admin.guard';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Ng4TwitterTimelineModule} from 'ng4-twitter-timeline/lib';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'addgame', component: AddGameComponent , canActivate: [AdminGuard]},
  { path: 'updategame/:id', component: UpdateGameComponent , canActivate: [AdminGuard]},
  { path: 'game/:id', component: GameComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    AddGameComponent,
    GameComponent,
    UpdateGameComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    Ng4TwitterTimelineModule
  ],
  providers: [
    GameService,
    DatePipe,
    AdminService,
    AdminGuard,
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
