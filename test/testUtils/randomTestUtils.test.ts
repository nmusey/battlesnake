import { simulator } from "./randomTestUtils";

describe("simulator", () => {
    it("accepts a valid function with no arguments", () => {
        const func = () => 1
        const condition = (value: number) => value == 1

        const simulated = simulator(10)(func)(condition);

        expect(simulated).toBe(true);
    })

    it("accepts a valid function with arguments", () => {
        const add = (arg1: number, arg2: number) => (arg1 + arg2)
        const condition = (value: number) => value == 3

        const simulated = simulator(10)(add, 1, 2)(condition);

        expect(simulated).toBe(true);
    })

    it("rejects an invalid function", () => {
        const func = () => 2
        const condition = (value: number) => value == 1

        const simulated = simulator(10)(func)(condition);

        expect(simulated).toBe(false);
    })
})