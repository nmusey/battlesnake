import { Location } from './Location';
import { Battlesnake } from './Battlesnake';

export type Board = {
    height: number;
    width: number;
    food: Location[];
    hazards: Location[];
    snakes: Battlesnake[];
};