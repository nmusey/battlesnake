import { Move, Moves } from "../types/Move";
import { Board } from "../types/Board"

export class MoveDecider {
    lastMove: Move;

    constructor() {
        this.lastMove = Moves.UP;
    }

    getMove = () => {
        const possibleMoves = [Moves.UP, Moves.RIGHT, Moves.DOWN, Moves.LEFT];

        const nextIndex = (possibleMoves.indexOf(this.lastMove) + 1) % possibleMoves.length;
        
        this.lastMove = possibleMoves[nextIndex];
        return this.lastMove;
    }   
}