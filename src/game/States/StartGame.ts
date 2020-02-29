import { IState } from '../interface/IState';
import { Game } from '..';
import Player from '../../player';
import { PreparePhase } from './PrepareFase';

export class StartGame implements IState {
	constructor(private game: Game) {}

	private playerOrder: { player: Player; number: number }[] = [];

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
		players.forEach(player => {
			player.dice.RollDice.addEventListener(this.ReadPlayerDice(player));
		});
	};

	ReadPlayerDice = (player: Player) => {
		const readDice = (number: number) => {
			this.playerOrder.push({ player, number });
			console.log(`jogador ${player.name} tirou um ${number}`);
			player.dice.RollDice.removeEventListener(readDice);
			if (this.playerOrder.length === this.game.players.length)
				this.changePlayersOrder();
		};
		return readDice;
	};

	changePlayersOrder = () => {
		this.game.players = this.playerOrder
			.sort((a, b) => b.number - a.number)
			.map(playerOrder => playerOrder.player);
		this.game.changeState(
			new PreparePhase(this.game, this.game.players[0])
		);
	};

	destroy = () => {};
}
