import { EquipableCard } from './cards/interfaces/EquipableCard';
import { ICard } from './cards/interfaces/Card';

export default class Player {
	constructor(public name: string) {}

	level: number = 1;

	hand: ICard[] = [];

	equipped: EquipableCard[];

	itens: ICard[];

	drawCard = (card: ICard) => this.hand.push(card);
}
