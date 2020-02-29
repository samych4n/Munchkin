import { ICardInfo } from './CardInfo';
import { ICard } from './Card';

export interface ICardCreateInfo {
	Type: new (...args: any[]) => ICard;
	amount: number;
	CardInfo: ICardInfo;
}
