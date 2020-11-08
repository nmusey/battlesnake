import { Board, Move, Moves } from "../types/GameTypes";

export class Strategy {
    /*/
     * This is a base class and should only be used directly for testing.
     * To use this, extend the class. See CircleStrategy.ts for an example.
    /*/
    label: string = "genericStrategy"

    getMove =  (board?: Board): Move => Moves.DOWN;
}