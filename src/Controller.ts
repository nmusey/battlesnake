import { GameController } from './game/GameController';
import { CircleStrategy } from './game/strategies/CircleStrategy';
import { Strategy } from './types/Strategy';

import { Game } from './types/GameTypes';

const defaultStrategy = new CircleStrategy();

export class Controller {
    gameControllers: {[key: string]: GameController} = {};

    start = (game: Game, strategyOverride?: Strategy): void => {
        const strategy = strategyOverride || defaultStrategy;
        this.gameControllers[game.id] = new GameController(game, strategy);
    }

    end = (game: Game): void => {
        delete this.gameControllers[game.id];
    }

    getGameController = (game: Game): GameController => {
        return this.gameControllers[game.id];
    }
}