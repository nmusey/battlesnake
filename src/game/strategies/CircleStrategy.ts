import { Strategy } from "../Strategy";

import { Move, Moves, Board } from "../../types/GameTypes";

export class CircleStrategy extends Strategy {
    label = "circle"
    lastMove: Move;

    constructor() {
        super()
        this.lastMove = Moves.UP;
    }

    getMove = (): Move => {
        const possibleMoves = [Moves.UP, Moves.RIGHT, Moves.DOWN, Moves.LEFT];

        const nextIndex = (possibleMoves.indexOf(this.lastMove) + 1) % possibleMoves.length;
        
        this.lastMove = possibleMoves[nextIndex];
        return this.lastMove;
    }   
}