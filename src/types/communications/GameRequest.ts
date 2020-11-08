import { Board, Battlesnake, Game } from '../GameTypes';

export type GameRequest = {
    game: Game,
    turn: number,
    board: Board,
    you: Battlesnake
}

export interface GameStartRequest extends GameRequest {}
export interface GameEndRequest extends GameRequest {}