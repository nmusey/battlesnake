import { GameController } from "../src/game/GameController";
import { RandomStrategy } from "../src/game/strategies/RandomStrategy";

import { mockGame } from "./mocks/game";
import { isMove } from "./testUtils/moveTestUtils";

describe("GameController", () => {
    it("should have a getMove function", () => {
        const gameController = new GameController(mockGame, new RandomStrategy());

        const isValid = isMove( gameController.getMove() );

        expect(isValid).toBe(true);
    })
})