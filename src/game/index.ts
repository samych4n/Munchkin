import { createDeck, Deck } from '../../cards/Deck/index';
import { DeckInfo } from '../../cards/interfaces/DeckInfo';
import Player from '../../player';
import { State } from './State';
import { GameStateMachine } from './GameStateMachine';
import { StartGame } from './StartGame';

export class Game implements GameStateMachine {
	private state;

	public deck: Deck;

	constructor(deckInfo: DeckInfo, public players: Player[]) {
		this.deck = createDeck(deckInfo);
		this.players = players;
		this.changeState(new StartGame(this));
	}

	changeState = (state: State) => {
		if (this.state) {
			this.state.destroy();
		}
		this.state = state;
		this.state.execute();
	};
}
