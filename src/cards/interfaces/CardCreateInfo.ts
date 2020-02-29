import { CardInfo } from './CardInfo';
import { ICard } from './Card';

export interface ICardCreateInfo {
	Type: new (...args: any[]) => ICard;
	amount: number;
	CardInfo: CardInfo;
}
