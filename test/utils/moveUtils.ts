import { Move, Moves } from "../../src/types/GameTypes";

export const isValidMove = (move: Move): boolean => {
    const allMoves = [
        Moves.UP,
        Moves.DOWN,
        Moves.LEFT,
        Moves.RIGHT
    ];

    return allMoves.includes(move);
}