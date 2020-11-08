import { Strategy } from './Strategy';

import { Game, Board } from '../types/GameTypes';

export class GameController {    
    id: string;
    strategy: Strategy;

    constructor(game: Game, strategy: Strategy) {
        this.id = game.id;
        this.strategy = strategy;
    }

    getMove = (board: Board) => this.strategy.getMove(board);
}