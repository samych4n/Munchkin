import { CardInfo } from './CardInfo';
import { Card } from './Card';

export abstract class DoorCard implements Card {
	abstract cardInfo: CardInfo;

	abstract playCard: () => void;
}
