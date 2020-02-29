import { ICardInfo } from './CardInfo';

export interface ICard {
	cardInfo: ICardInfo;
	playCard: () => void;
}
