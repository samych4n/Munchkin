import Player from '../player';
import { d6 } from '../Board';
import { DiceRoll } from '../Notification';

export default (player: Player) => {
	DiceRoll.next({ player, value: d6.roll() });
};
