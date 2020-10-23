import {Game} from '../Game';
import {Board} from '../Board';
import {Battlesnake} from '../Battlesnake';
import {Move} from '../Move';

export type MoveRequest = {
    game?: Game;
    turn?: number;
    board?: Board;
    you?: Battlesnake;
};

export type MoveResponse = {
    move: Move;
    shout: string;
}