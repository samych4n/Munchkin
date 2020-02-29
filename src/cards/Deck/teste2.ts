import { IDeckInfo } from '../interfaces/DeckInfo';
import { LogCardTreasure } from '../types/LogCardTreasure';
import { LogCardDoor } from '../types/LogCardDoor';

export const teste: IDeckInfo = {
	cards: [
		{
			Type: LogCardTreasure,
			amount: 30,
			CardInfo: {
				name: 'TESTE 123',
				description: 'laksjdklasjdkl',
				value: 100,
			},
		},
		{
			Type: LogCardDoor,
			amount: 30,
			CardInfo: {
				name: 'TESTE 123 door',
				description: 'alguma coisa',
				value: 100,
			},
		},
	],
};
