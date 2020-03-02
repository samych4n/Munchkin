import { createDeck, Deck } from '../cards/Deck/index';
import { IDeckInfo } from '../cards/interfaces/DeckInfo';
import Player from '../player';
import { IState } from './interface/IState';
import { IGameStateMachine } from './interface/IGameStateMachine';
import { StartGame } from './States/StartGame';
import { Board } from '../Board';

export class Game implements IGameStateMachine {
	private state;

	board: Board;

	constructor(deckInfo: IDeckInfo, public players: Player[]) {
		this.board = new Board(deckInfo);
		this.changeState(new StartGame(this));
	}

	changeState = (state: IState) => {
		if (this.state) {
			this.state.destroy();
		}
		this.state = state;
		this.state.execute();
	};
}
