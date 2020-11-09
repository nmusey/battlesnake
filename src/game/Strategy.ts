import { Board, Move, Moves } from "../types/GameTypes";

export interface Strategy {
    label: string;
    getMove: (board?: Board) => Move;
}