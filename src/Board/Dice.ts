import { Action } from '../Actions';

export class Dice {
	public RollDice = new Action<number>();

	constructor(private faces: number) {}

	roll = () => {
		const rollValue = Math.floor(Math.random() * this.faces + 1);
		this.RollDice.call(rollValue);
		return rollValue;
	};
}
