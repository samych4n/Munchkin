import { DoorCard } from '../../interfaces/DoorCard';
import { ICardInfo } from '../../interfaces/CardInfo';

export class LogCardDoor extends DoorCard {
	constructor(public cardInfo: ICardInfo) {
		super();
	}

	playCard = () => {
		const { name, description } = this.cardInfo;
		console.log(
			`Door Card \n nome:${name} \n descricao: ${description} \n`
		);
	};
}
