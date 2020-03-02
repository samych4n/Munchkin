import { DiceRoll, DrawCard, KickDoor } from '../Notification';
import { DoorCard } from '../cards/interfaces/DoorCard';

DiceRoll.subscribe(val =>
	console.log(`o jogador ${val.player.name} tirou um ${val.value}`)
);
DrawCard.subscribe(val =>
	console.log(
		`O jogador ${val.player.name} comprou a carta ${
			val.card.cardInfo.name
		} que é uma ${
			val.card instanceof DoorCard ? 'Door Card' : 'Treasure Card'
		}`
	)
);

KickDoor.subscribe(val =>
	console.log(
		`O jogador ${val.player.name} abriu a porta ${val.card.cardInfo.name}`
	)
);
