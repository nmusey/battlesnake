import { GameController } from './game/GameController';

import { Game } from './types/GameTypes';

export class Controller {
    gameControllers: {[key: string]: GameController} = {};

    start = (game: Game): void => {
        this.gameControllers[game.id] = new GameController(game);
    }

    end = (game: Game): void => {
        delete this.gameControllers[game.id];
    }

    getGameController = (game: Game): GameController => {
        return this.gameControllers[game.id];
    }
}