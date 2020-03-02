export class Dice {
	constructor(private faces: number) {}

	roll = () => Math.floor(Math.random() * this.faces + 1);
}
