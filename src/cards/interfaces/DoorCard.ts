import { ICardInfo } from './CardInfo';
import { ICard } from './Card';

export abstract class DoorCard implements ICard {
	abstract cardInfo: ICardInfo;

	abstract playCard: () => void;
}
