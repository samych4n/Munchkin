import { CardInfo } from './CardInfo';

export interface ICard {
	cardInfo: CardInfo;
	playCard: () => void;
}
