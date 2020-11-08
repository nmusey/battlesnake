import { Controller } from '../src/Controller';

import { mockGame, mockGame2 } from './mocks/game';

describe("Controller", () => {
    describe("lifecycle methods", () => {
        describe("starting a game", () => {
            let controller: Controller;

            beforeEach(() => {
                controller = new Controller();
            })

            it("starts a new game with a correct id", () => {
                controller.start(mockGame);

                const gameController = controller.getGameController(mockGame);

                expect(gameController.id).toBe(mockGame.id)
            })

            it("starts multiple games with correct ids", () => {
                const controller = new Controller();

                controller.start(mockGame);
                controller.start(mockGame2);

                const gameController = controller.getGameController(mockGame);
                const gameController2 = controller.getGameController(mockGame2);

                expect(gameController.id).toBe(mockGame.id)
                expect(gameController2.id).toBe(mockGame2.id);
                expect(gameController.id).not.toBe(gameController2.id);
            })
        })

        describe("ending a game", () => {
            let controller: Controller;
            
            beforeEach(() => {
                controller = new Controller();
                controller.start(mockGame);
                controller.start(mockGame2);
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
})