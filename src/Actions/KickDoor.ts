import Player from '../player';
import { d6 } from '../Board';
import { DiceRoll, KickDoor } from '../Notification';
import { DoorCard } from '../cards/interfaces/DoorCard';

// export default (player: Player) => {
// 	//
// };

export default {
	set KickDoor(func) {
		this.func = func;
	},
	get KickDoor() {
		return (player: Player, card: DoorCard) => {
			if (this.func && this.func()) KickDoor.next({ player, card });
		};
	},
};
