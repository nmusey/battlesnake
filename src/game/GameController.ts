import { MoveDecider } from './MoveDecider';

import { Game } from '../types/GameTypes';

export class GameController {    
    id: string;
    moveDecider: MoveDecider;

    constructor(game: Game) {
        this.id = game.id;
        this.moveDecider = new MoveDecider();
    }

    getMove = () => this.moveDecider.getMove();
}