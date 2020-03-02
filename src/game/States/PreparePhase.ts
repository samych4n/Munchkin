import { IState } from '../interface/IState';
import Player from '../../player';
import { Game } from '..';

export class PreparePhase implements IState {
	constructor(private Game: Game, private currentPlayer: Player) {}

	execute = () => {};

	passPhase = (player: Player) => {
		console.log(this.currentPlayer.name, player.name);
		if (this.currentPlayer === player) console.log('next phase');
	};

	destroy: () => void;
}
