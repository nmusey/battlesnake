import { CircleStrategy } from "../../src/game/strategies/CircleStrategy";

describe("Strategy", () => {
    it("cycles through moves", () => {
        const strategy = new CircleStrategy();

        const move1 = JSON.stringify(strategy.getMove());
        const move2 = JSON.stringify(strategy.getMove());
        const move3 = JSON.stringify(strategy.getMove());

        expect(move1).not.toMatch(move2);
        expect(move2).not.toMatch(move3);
        expect(move1).not.toMatch(move3);
    })
})