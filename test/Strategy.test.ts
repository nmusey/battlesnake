import { Strategy } from "../src/game/Strategy";
import { Moves } from "../src/types/GameTypes";

import { isValidMove } from "./utils/moveUtils";

describe("Strategy", () => {
    it("has a string label", () => {
        const label = new Strategy().label;
        expect(typeof label).toBe("string");
    })

    it("has a getMove function", () => {
        const strategy = new Strategy();
        const move = strategy.getMove();

        expect(isValidMove(move)).toBe(true);
    })
})