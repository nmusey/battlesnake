import { getRandomMove } from "../../src/utils/moveUtils";
import { isValidMove } from "../testUtils/moveTestUtils";

import { simulator } from "../testUtils/randomTestUtils";

describe("getRandomMove", () => {
    it("should return a move", () => {
        const simulatedValue = simulator(100)(getRandomMove)( move => isValidMove(move) );
    })
})