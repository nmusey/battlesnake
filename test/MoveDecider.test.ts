import { MoveDecider } from "../src/utils/MoveDecider";

describe("MoveDecider", () => {
    it("has a static variable lastMove", () => {
        const moveDecider = new MoveDecider();

        expect(moveDecider.lastMove).toBeDefined();
    })

    it("cycles through moves", () => {
        const moveDecider = new MoveDecider();

        const move1 = JSON.stringify(moveDecider.getMove());
        const move2 = JSON.stringify(moveDecider.getMove());
        const move3 = JSON.stringify(moveDecider.getMove());

        expect(move1).not.toMatch(move2);
        expect(move2).not.toMatch(move3);
        expect(move1).not.toMatch(move3);
    })
})