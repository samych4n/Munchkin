import { Subject } from 'rxjs';
import { ICard } from '../cards/interfaces/Card';
import Player from '../player';

export default new Subject<{
	player: Player;
	card: ICard;
}>();
