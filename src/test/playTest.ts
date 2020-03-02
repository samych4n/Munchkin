import { teste } from '../cards/Deck/DeckInfo/Teste';
import { Game } from '../game';
import Player from '../player';
import Actions from '../Actions';

const players = [
	new Player('Samuel'),
	new Player('Teste'),
	new Player('Bot'),
	new Player('Alguma coisa'),
];

const game = new Game(teste, players);

Actions.KickDoor(players[0], game.board.deck.drawDoor());
Actions.KickDoor(players[0], game.board.deck.drawDoor());
Actions.KickDoor = () => true;
Actions.KickDoor(players[1], game.board.deck.drawDoor());
Actions.KickDoor(players[2], game.board.deck.drawDoor());

// RollDice(players[0]);
// RollDice(players[0]);
// RollDice(players[0]);
// RollDice(players[0]);
// RollDice(players[1]);
// RollDice(players[2]);
// RollDice(players[3]);

// PassPhase.call(game.players[0]);
