import { DoorCard, TreasureCard, CardInfo } from "../interfaces";

export class LogCardDoor extends DoorCard{
    constructor(public cardInfo:CardInfo){ super(); }
    playCard = () => {
        const {name,description} = this.cardInfo;
        console.log(`Door Card \n nome:${name} \n descricao: ${description} \n`);
    };
}

export class LogCardTreasure extends TreasureCard{
    constructor(public cardInfo:CardInfo){ super(); }
    playCard = () => {
        const {name,description,value} = this.cardInfo;
        console.log(`Treasure Card \n nome:${name} \n descricao: ${description} \n value: ${value}g \n`);
    };
} 