import {createDeck} from './cards/Deck/index'
import {teste} from './cards/Deck/teste2'
const Deck = createDeck(teste);
//Deck.shuffle();
const c1 = Deck.drawCard();
c1.nome = "alguma coisa ruim"
c1.playCard();
const c2 = Deck.drawCard();
c2.playCard();
const c3 = Deck.drawCard();
c3.playCard();