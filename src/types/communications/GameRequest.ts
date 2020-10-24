import { Board } from '../Board';
import { Battlesnake } from '../Battlesnake';

export type GameRequest = {
    game?: Object,
    turn?: number,
    board?: Board,
    you?: Battlesnake
}

export interface GameStartRequest extends GameRequest {}
export interface GameEndRequest extends GameRequest {}