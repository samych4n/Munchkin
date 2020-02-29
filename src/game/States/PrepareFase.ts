import { IState } from '../interface/IState';
import Player from '../../player';
import { Game } from '..';

export class PreparePhase implements IState {
	constructor(private Game: Game, private currentPlayer: Player) {}

	execute = () => {
		console.log(`Vez de: ${this.currentPlayer.name}`);
	};

	destroy: () => void;
}
