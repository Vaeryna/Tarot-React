import {TarotCard} from "./TarotCard";



export interface DrawResultProps {
    drawnCards: Record<number, TarotCard>,
    tone: string,
    isFlipped: Array<number>
    username: string,
    draw: string,

}