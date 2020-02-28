import { DeckInfo } from "../interfaces";
import { LogCardDoor, LogCardTreasure } from "../types/LogCard";

export const teste:DeckInfo =
{
    cards:[
        {
            type:LogCardTreasure,
            amount:2,
            CardInfo:{
                name:"TESTE 123",
                description:"laksjdklasjdkl",
                value:100,
            }
        },
        {
            type:LogCardDoor,
            amount:8,
            CardInfo:{
                name:"TESTE 123 door",
                description:"alguma coisa",
                value:100,
            }
        },
    ]
}