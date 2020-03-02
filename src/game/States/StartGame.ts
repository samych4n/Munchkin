import { Subscription } from 'rxjs';
import { IState } from '../interface/IState';
import { Game } from '..';
import Player from '../../player';
import { PreparePhase } from './PreparePhase';
import { DiceRoll } from '../../Notification';

export class StartGame implements IState {
	diceRoll$: Subscription;

	constructor(private game: Game) {}

	execute = () => {
		this.diceRoll$ = DiceRoll.subscribe(this.listenDiceRoll());
		const { players } = this.game;
		const { deck } = this.game.board;
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

	listenDiceRoll = () => {
		const playerOrder = [];
		return ({ player, value }: { player: Player; value: number }) => {
			if (!playerOrder.find(val => val.player === player))
				playerOrder.push({ player, value });
			if (playerOrder.length === this.game.players.length) {
				this.changePlayersOrder(
					playerOrder
						.sort((a, b) => b.number - a.number)
						.map(playerOrder => playerOrder.player)
				);
			}
		};
	};

	changePlayersOrder = playerOrder => {
		this.game.players = playerOrder;
		this.game.changeState(
			new PreparePhase(this.game, this.game.players[0])
		);
	};

	destroy = () => {
		this.diceRoll$.unsubscribe();
	};
}
