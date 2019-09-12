export class Game {
  players: [string];
  categories: [];
  questions: [];
  code: string;
  constructor(
    player: string,
  ) {
    this.addPlayer(player)
    this.code = this.createNewCode();
  }

  addPlayer(player) {
    if (!this.players) this.players = [player];
    else this.players.push(player)
  }

  private createNewCode() {
    return 'slappthebass!'
  }
}
