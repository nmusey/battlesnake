
import { getRandomMove, isValidMove, locationAfterMove, validMoves } from "../../src/utils/moveUtils";
import { Moves, Battlesnake, Board } from "../../src/types/GameTypes";

import { isMove } from "../testUtils/moveTestUtils";
import { simulator } from "../testUtils/randomTestUtils";
import { board as mockBoard } from "../mocks/board";
import { self } from "../mocks/snake";
import { SearchGraph } from "../../src/utils/SearchGraph";

describe("moveUtils", () => {
    describe("getRandomMove", () => {
        it("should return a move", () => {
            const simulatedValue = simulator(100)(getRandomMove)( move => isMove(move) );

            expect(simulatedValue).toBe(true);
        })
    })

    describe("locationAfterMove", () => {
        it("should work with an up move", () => {
            const afterMove = locationAfterMove({x: 1, y: 1}, Moves.UP);
            expect(afterMove.x).toBe(1)
            expect(afterMove.y).toBe(2)
        })

        it("should work with a down move", () => {
            const afterMove = locationAfterMove({x: 1, y: 1}, Moves.DOWN);
            expect(afterMove.x).toBe(1)
            expect(afterMove.y).toBe(0)
        })

        it("should work with a left move", () => {
            const afterMove = locationAfterMove({x: 1, y: 1}, Moves.LEFT);
            expect(afterMove.x).toBe(0)
            expect(afterMove.y).toBe(1)
        })
        
        it("should work with a right move", () => {
            const afterMove = locationAfterMove({x: 1, y: 1}, Moves.RIGHT);
            expect(afterMove.x).toBe(2)
            expect(afterMove.y).toBe(1)
        })
    })

    describe("isValidMove", () => {
        const startPosition = {x: 0, y: 0};

        it("marks a move into an empty space as valid", () => {
            const board: Board = {
                height: 3,
                width: 3,
                food: [],
                hazards: [],
                snakes: []
            };

            const graph = new SearchGraph(board);
            const isValid = isValidMove(graph, startPosition, Moves.UP);
            
            expect(isValid).toBe(true);
        })

        it("marks a move into food as valid", () => {
            const board: Board = {
                height: 3,
                width: 3,
                food: [{x: 0, y: 1}],
                hazards: [],
                snakes: []
            };

            const graph = new SearchGraph(board);
            const isValid = isValidMove(graph, startPosition, Moves.UP);
            
            expect(isValid).toBe(true);
        })

        it("marks a move into the snake as invalid", () => {
            const snake: Battlesnake = {
                id: "id",
                name: "snake",
                shout: "shout",
                squad: "squad",
                health: 100,
                latency: "100",
                length: 2,
                head: {x: 0, y: 1},
                body: [
                    {x: 0, y: 1},
                    {x: 0, y: 0}
                ]
            };
            
            const board: Board = {
                height: 3,
                width: 3,
                food: [],
                hazards: [],
                snakes: [snake]
            };

            const graph = new SearchGraph(board);
            const isValid = isValidMove(graph, {x: 0, y: 1}, Moves.DOWN);
            
            expect(isValid).toBe(false);
        })

        it("marks a move into a hazard as invalid", () => {
            const board: Board = {
                height: 3,
                width: 3,
                food: [],
                hazards: [{x: 0, y: 1}],
                snakes: []
            };

            const graph = new SearchGraph(board);
            const isValid = isValidMove(graph, startPosition, Moves.UP);
            
            expect(isValid).toBe(false);
        })

        it("marks a move into another snake as invalid", () => {
            const enemySnake = {
                id: "id2",
                name: "enemySnake",
                shout: "shout",
                squad: "squad2",
                health: 100,
                latency: "100",
                length: 1,
                head: {x: 0, y: 1},
                body: [
                    {x: 0, y: 1}
                ]     
            };

            const board: Board = {
                height: 3,
                width: 3,
                food: [],
                hazards: [],
                snakes: [enemySnake]
            };

            const graph = new SearchGraph(board, "id", "squad1");
            const isValid = isValidMove(graph, startPosition, Moves.UP);
            
            expect(isValid).toBe(false);
        })

        it("marks a move into a friend as invalid", () => {
            const enemySnake = {
                id: "id2",
                name: "friendSnake",
                shout: "shout",
                squad: "squad",
                health: 100,
                latency: "100",
                length: 1,
                head: {x: 0, y: 1},
                body: [
                    {x: 0, y: 1}
                ]     
            };

            const board: Board = {
                height: 3,
                width: 3,
                food: [],
                hazards: [],
                snakes: [enemySnake]
            };

            const graph = new SearchGraph(board, "id", "squad");
            const isValid = isValidMove(graph, startPosition, Moves.UP);
            
            expect(isValid).toBe(false);
        })

        it("marks a move out of bounds as invalid", () => {
            const board: Board = {
                height: 3,
                width: 3,
                food: [],
                hazards: [],
                snakes: []
            };

            const graph = new SearchGraph(board);
            const isValid = isValidMove(graph, startPosition, Moves.DOWN);
            
            expect(isValid).toBe(false);
        })
    })

    describe("validMoves", () => {
        it("should return 3 moves in the open", () => {
            const board: Board = {
                height: 5,
                width: 5,
                food: [],
                hazards: [],
                snakes: [self]
            };

            const graph = new SearchGraph(board);
            const startPosition = {x: 1, y: 1};
    
            const moves = validMoves(graph, startPosition);
            expect(moves.length).toBe(3);
        })

        it("should return 1 moves in a corner", () => {
            const cornerSnake: Battlesnake = {
                id: "1",
                name: "self",
                health: 100,
                body: [
                    {x: 0, y: 0},
                    {x: 0, y: 1},
                    {x: 0, y: 2}
                ],
                latency: "100",
                head: {x: 0, y: 0},
                length: 3,
                shout: "SELF-SHOUT",
                squad: "1"
            };

            const board: Board = {
                height: 4,
                width: 4,
                food: [],
                hazards: [],
                snakes: [cornerSnake]
            };

            const graph = new SearchGraph(board, cornerSnake.id);

            const moves = validMoves(graph, cornerSnake.head);
            expect(moves.length).toBe(1);
        })
    })
})