import { IState } from '../interface/IState';
import { Game } from '..';

export class StartGame implements IState {
	constructor(private game: Game) {}

	static observer;

	execute = () => {
		const { deck, players } = this.game;
		deck.shuffleDoors();
		deck.shuffleTreasure();
		players.forEach(player => {
			player.drawCard(deck.drawDoor());
			player.drawCard(deck.drawDoor());
			player.drawCard(deck.drawDoor());
			player.drawCard(deck.drawDoor());
			player.drawCard(deck.drawTreasure());
			player.drawCard(deck.drawTreasure());
			player.drawCard(deck.drawTreasure());
			player.drawCard(deck.drawTreasure());
		});
	};

	destroy = () => {};
}
