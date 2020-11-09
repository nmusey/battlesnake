import { GameController } from "../src/game/GameController";
import { RandomStrategy } from "../src/game/strategies/RandomStrategy";

import { mockGame } from "./mocks/game";
import { isValidMove } from "./testUtils/moveTestUtils";

describe("GameController", () => {
    it("should have a getMove function", () => {
        const gameController = new GameController(mockGame, new RandomStrategy());

        const isValid = isValidMove( gameController.getMove() );

        expect(isValid).toBe(true);
    })
})