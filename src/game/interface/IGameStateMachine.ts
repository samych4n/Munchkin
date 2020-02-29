import { State } from './State';

export interface GameStateMachine {
	changeState: (state: State) => void;
}
