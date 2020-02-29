import { IDeckInfo } from '../interfaces/DeckInfo';
import { TreasureCard } from '../interfaces/TreasureCard';
import { DoorCard } from '../interfaces/DoorCard';
import { ICard } from '../interfaces/Card';

export function createDeck(deckInfo: IDeckInfo) {
	const cards = [];
	deckInfo.cards.forEach(card => {
		for (let x = 0; x < card.amount; x++) {
			cards.push(new card.Type({ ...card.CardInfo }));
		}
	});
	return new Deck(cards);
}

export class Deck {
	private Doors: DoorCard[];

	private Treasure: TreasureCard[];

	constructor(private cards: ICard[]) {
		this.Doors = cards.filter(card => card instanceof DoorCard);
		this.Treasure = cards.filter(card => card instanceof TreasureCard);
	}

	shuffleDoors = () => {
		for (let i = 0; i < this.Doors.length; i++) {
			const newPos = Math.floor(Math.random() * this.Doors.length);
			const hold = this.Doors[newPos];
			this.Doors[newPos] = this.Doors[i];
			this.Doors[i] = hold;
		}
	};

	shuffleTreasure = () => {
		for (let i = 0; i < this.Treasure.length; i++) {
			const newPos = Math.floor(Math.random() * this.Treasure.length);
			const hold = this.Treasure[newPos];
			this.Treasure[newPos] = this.Treasure[i];
			this.Treasure[i] = hold;
		}
	};

	drawDoor: () => DoorCard = () => this.Doors.shift();

	drawTreasure: () => TreasureCard = () => this.Treasure.shift();
}
