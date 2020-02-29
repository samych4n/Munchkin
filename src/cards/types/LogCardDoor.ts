import { DoorCard } from '../interfaces/DoorCard';
import { CardInfo } from '../interfaces/CardInfo';

export class LogCardDoor extends DoorCard {
	constructor(public cardInfo: CardInfo) {
		super();
	}

	playCard = () => {
		const { name, description } = this.cardInfo;
		console.log(
			`Door Card \n nome:${name} \n descricao: ${description} \n`
		);
	};
}
