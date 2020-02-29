import { EquipableCard } from './cards/interfaces/EquipableCard';
import { Card } from './cards/interfaces/Card';

export default class Player {
	constructor(public name: string) {}

	level: number = 1;

	hand: Card[] = [];

	equipped: EquipableCard[];

	itens: Card[];

	drawCard = (card: Card) => this.hand.push(card);
}
