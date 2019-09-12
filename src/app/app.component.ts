import { Component } from '@angular/core';
import { Game } from 'src/app/components/models/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playerName: string;
  gameCode: string;
  gameStarted: boolean = false;
  game: Game;

  generateGameId() {
    return 'slapthatbass';
  }

  startGame(playerName: string) {
    this.gameStarted = true;
    this.game = new Game(playerName);
    console.log(this.game);
  }


}
