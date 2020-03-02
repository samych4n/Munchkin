import { TreasureCard } from '../../interfaces/TreasureCard';
import { ICardInfo } from '../../interfaces/CardInfo';

export class LogCardTreasure extends TreasureCard {
	constructor(public cardInfo: ICardInfo) {
		super();
	}

	playCard = () => {
		const { name, description, value } = this.cardInfo;
		console.log(
			`Treasure Card \n nome:${name} \n descricao: ${description} \n value: ${value}g \n`
		);
	};
}
