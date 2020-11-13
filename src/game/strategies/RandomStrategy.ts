import { Strategy } from "../../types/Strategy";

import { Move, Board } from "../../types/GameTypes";
import { getRandomMove } from "../../utils/moveUtils";

export class RandomStrategy implements Strategy {
    label = "random"

    getMove = (board?: Board): Move => {
        return getRandomMove();
    }
}