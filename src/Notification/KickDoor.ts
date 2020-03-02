import { Subject } from 'rxjs';
import Player from '../player';
import { DoorCard } from '../cards/interfaces/DoorCard';

export default new Subject<{
	player: Player;
	card: DoorCard;
}>();
