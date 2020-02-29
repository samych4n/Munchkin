import { EquipableCard } from '../cards/interfaces/EquipableCard';
import { ICard } from '../cards/interfaces/Card';
import { Dice } from '../Board/Dice';

export default class Player {
	dice: Dice;

	constructor(public name: string) {
		this.dice = new Dice(6);
	}

	level: number = 1;

	hand: ICard[] = [];

	equipped: EquipableCard[];

	itens: ICard[];

	drawCard = (card: ICard) => this.dice.roll() && this.hand.push(card);
}
