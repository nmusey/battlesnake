import { Controller } from '../src/Controller';
import { RandomStrategy } from '../src/game/strategies/RandomStrategy';
import { Strategy } from '../src/game/Strategy';

import { mockGame, mockGame2 } from './mocks/game';

describe("Controller", () => {
    describe("lifecycle methods", () => {
        describe("starting a game", () => {
            let controller: Controller;
            let strategy: Strategy

            beforeEach(() => {
                controller = new Controller();
                strategy = new RandomStrategy();
            })

            it("starts a new game with a correct id", () => {
                controller.start(mockGame, strategy);

                const gameController = controller.getGameController(mockGame);

                expect(gameController.id).toBe(mockGame.id)
            })

            it("starts multiple games with correct ids", () => {
                controller.start(mockGame, strategy);
                controller.start(mockGame2, strategy);

                const gameController = controller.getGameController(mockGame);
                const gameController2 = controller.getGameController(mockGame2);

                expect(gameController.id).toBe(mockGame.id)
                expect(gameController2.id).toBe(mockGame2.id);
                expect(gameController.id).not.toBe(gameController2.id);
            })

            it("handles multiple strategies", () => {
                const otherStrategy = new RandomStrategy();

                controller.start(mockGame, strategy);
                controller.start(mockGame2, otherStrategy);

                const gameController = controller.getGameController(mockGame);
                const gameController2 = controller.getGameController(mockGame2);

                expect(gameController.strategy).not.toBe(gameController2);
            })

            it("handles not getting a strategy passed to it", () => {
                controller.start(mockGame);

                const gameController = controller.getGameController(mockGame);

                expect(gameController.id).toBe(mockGame.id)
            })
        })

        describe("ending a game", () => {
            let controller: Controller;
            let strategy: Strategy;
            
            beforeEach(() => {
                controller = new Controller();
                strategy = new RandomStrategy();
                controller.start(mockGame, strategy);
                controller.start(mockGame2, strategy);
            })

            it("deletes only the correct game when its finished", () => {
                controller.end(mockGame);

                expect(controller.getGameController(mockGame)).toBeUndefined;
                expect(controller.getGameController(mockGame2)).toBeDefined;
            })

            it("doesn't error when a game is ended twice", () => {
                controller.end(mockGame);
                controller.end(mockGame);

                expect(controller.getGameController(mockGame)).toBeUndefined;
            })
        })
    })

    describe("getters", () => {
        const controller = new Controller();
        controller.start(mockGame);

        describe("getGameController", () => {
            const getterResult = controller.getGameController(mockGame);
            const directResult = controller.gameControllers[mockGame.id];

            expect(getterResult).toBe(directResult);
        })
    })
})