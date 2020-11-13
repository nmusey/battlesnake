import { Moves, Move } from "../../src/types/GameTypes"
import { isMove } from "./moveTestUtils";

describe("isMove", () => {
    it("should recognize a move", () => {
        expect(isMove(Moves.UP)).toBe(true);
    })

    it("should reject an invalid move", () => {
        expect(isMove("no" as Move)).toBe(false);
    })
})