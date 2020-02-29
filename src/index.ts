import { teste } from './cards/Deck/teste2'
import { Game } from "./game";
import Player from './player';
const players = [
        new Player("Samuel"),
        new Player("Teste"),
        new Player("Bot"),
        new Player("Alguma coisa")
    ];
new Game(teste,players);
