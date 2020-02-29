import { ICardInfo } from './CardInfo';
import { ICard } from './Card';

export abstract class TreasureCard implements ICard {
	abstract cardInfo: ICardInfo;

	abstract playCard: () => void;
}
