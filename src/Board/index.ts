import { Dice } from './Dice';
import Player from '../player';
import { createDeck, Deck } from '../cards/Deck';
import { IDeckInfo } from '../cards/interfaces/DeckInfo';
import { DoorCard } from '../cards/interfaces/DoorCard';
import { TreasureCard } from '../cards/interfaces/TreasureCard';

export const d6 = new Dice(6);

export class Board {
	currentTurn = 0;

	playerTurn = 0;

	playerOrder: Player[];

	public deck: Deck;

	public DoorDiscard: DoorCard[];

	public TreasureDiscard: TreasureCard[];

	constructor(deckInfo: IDeckInfo) {
		this.deck = createDeck(deckInfo);
	}
}
