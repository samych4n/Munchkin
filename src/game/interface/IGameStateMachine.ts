import { IState } from './IState';

export interface IGameStateMachine {
	changeState: (state: IState) => void;
}
