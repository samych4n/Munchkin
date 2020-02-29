import { TreasureCard } from '../interfaces/TreasureCard';
import { CardInfo } from '../interfaces/CardInfo';

export class LogCardTreasure extends TreasureCard {
	constructor(public cardInfo: CardInfo) {
		super();
	}

	playCard = () => {
		const { name, description, value } = this.cardInfo;
		console.log(
			`Treasure Card \n nome:${name} \n descricao: ${description} \n value: ${value}g \n`
		);
	};
}
