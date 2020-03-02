import { Subject } from 'rxjs';
import Player from '../player';

export default new Subject<{
	player: Player;
	value: number;
}>();
