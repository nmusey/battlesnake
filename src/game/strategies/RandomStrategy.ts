import { Strategy } from "../../types/Strategy";

import { Moves, Move, Board } from "../../types/GameTypes";

export class RandomStrategy implements Strategy {
    label = ""

    getMove = (board?: Board): Move => {
        return Moves.DOWN;
    }
}