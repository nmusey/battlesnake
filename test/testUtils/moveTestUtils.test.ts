import { Moves, Move } from "../../src/types/GameTypes"
import { isValidMove } from "./moveTestUtils";

describe("isValidMove", () => {
    it("should recognize a move", () => {
        expect(isValidMove(Moves.UP)).toBe(true);
    })

    it("should reject an invalid move", () => {
        expect(isValidMove("no" as Move)).toBe(false);
    })
})