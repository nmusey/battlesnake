import { GameRequest } from './GameRequest';
import { Move } from '../GameTypes';

export interface MoveRequest extends GameRequest {}

export type MoveResponse = {
    move: Move;
    shout: string;
}