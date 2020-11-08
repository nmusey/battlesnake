import { GameController } from "../src/game/GameController";
import { Strategy } from "../src/game/Strategy";

import { mockGame } from "./mocks/game";
import { isValidMove } from "./utils/moveUtils";

describe("GameController", () => {
    it("should have a getMove function", () => {
        const gameController = new GameController(mockGame, new Strategy());

        const isValid = isValidMove( gameController.getMove() );

        expect(isValid).toBe(true);
    })
})