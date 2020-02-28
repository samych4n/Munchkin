import { DeckInfo } from "../interfaces";

export function createDeck(deckInfo:DeckInfo){
    let cards = [];
    deckInfo.cards.forEach(cardInfo => {for(let x = 0; x<cardInfo.amount; x++){ cards.push(new cardInfo.type(cardInfo))}});
    console.log(cards);
    return new Deck(cards);
}

class Deck{
    constructor(private cards){}

    shuffle = () => {
        for(let i = 0; i < this.cards.length;i++){
            let newPos = Math.floor(Math.random() * this.cards.length);
            let hold = this.cards[newPos];
            this.cards[newPos] = this.cards[i];
            this.cards[i] = hold;
        }
        this.cards.forEach(val => console.log(val.nome));
    };
    drawCard = () => {
        return this.cards.shift();
    };
}