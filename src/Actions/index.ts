/* eslint-disable max-classes-per-file */
export class Action<T> {
	protected actions: ((arg: T) => void)[] = [];

	addEventListener = (event: (arg: T) => void) => {
		this.actions.push(event);
	};

	removeEventListener = (event: (arg: T) => void) => {
		this.actions = this.actions.filter(action => event !== action);
	};

	call = (arg: T) => {
		this.actions.forEach(action => action(arg));
	};
}
