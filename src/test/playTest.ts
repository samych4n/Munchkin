import { teste } from '../cards/Deck/DeckInfo/teste';
import { Game } from '../game';
import Player from '../player';

const players = [
	new Player('Samuel'),
	new Player('Teste'),
	new Player('Bot'),
	new Player('Alguma coisa'),
];

const game = new Game(teste, players);
players[0].dice.roll();
players[1].dice.roll();
players[2].dice.roll();
players[3].dice.roll();
