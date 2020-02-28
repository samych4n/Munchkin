export interface Card{
    cardInfo:CardInfo;
    playCard:() => void;
}

export abstract class DoorCard implements Card{
    abstract cardInfo:CardInfo;
    abstract playCard: () => void;

}

export abstract class TreasureCard implements Card{
    abstract cardInfo:CardInfo;
    abstract playCard: () => void;
}

export interface CardInfo{
    name?:string;
    description?:string;
    value?:number;
    level?:number;
}

export interface CardCreateInfo{
    type: new (...args: any[]) => Card;
    amount:number;
    CardInfo:CardInfo;
}
export interface DeckInfo{
    cards:CardCreateInfo[];
}