import { Board, Move, Moves } from "./GameTypes";

export interface Strategy {
    label: string;
    getMove: (board?: Board) => Move;
}