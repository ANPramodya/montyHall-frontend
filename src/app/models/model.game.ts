export interface Game {
  gameId: number;
  prizeDoor: number;
  playerInitialChoice: number;
  hostOpenedDoor: number;
  playerSwitched: boolean;
  playerWon: boolean;
}
