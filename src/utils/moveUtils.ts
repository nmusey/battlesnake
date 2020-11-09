import { Move, Moves } from "../types/GameTypes";

export const getRandomMove = (): Move => {
    const allMoves = Object.values(Moves)
    
    return allMoves[Math.floor( Math.random() * allMoves.length )] as Move;
}