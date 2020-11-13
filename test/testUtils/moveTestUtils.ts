import { Move, Moves } from "../../src/types/GameTypes";

export const isMove = (move: Move): boolean => {
    const allMoves = Object.values(Moves);

    return allMoves.includes(move);
}