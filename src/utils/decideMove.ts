import {Move, Moves} from "../types/Move";
import {Board} from "../types/Board"

export let lastMove = Moves.UP;

export const decideMove = (board?: Board): Move => {
    const possibleMoves = [Moves.UP, Moves.RIGHT, Moves.DOWN, Moves.LEFT];

    const nextIndex = (possibleMoves.indexOf(lastMove) + 1) % possibleMoves.length;
    return possibleMoves[nextIndex];
}