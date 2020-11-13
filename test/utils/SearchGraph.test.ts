import { SearchGraph, GraphObjects } from "../../src/utils/SearchGraph";
import { Board, Battlesnake } from "../../src/types/GameTypes";

import { enemyBoard } from "../mocks/board";
import { self } from "../mocks/snake";

describe("SearchGraph", () => {
    describe("constructor", () => {
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

        const enemySnake = {
            id: "id2",
            name: "enemySnake",
            shout: "shout",
            squad: "squad2",
            health: 100,
            latency: "100",
            length: 1,
            head: {x: 2, y: 2},
            body: [
                {x: 2, y: 2}
            ]     
        };

        const board: Board = {
            height: 5,
            width: 5,
            food: [{x: 4, y: 4}],
            hazards: [],
            snakes: [snake, enemySnake]
        };

        const searchGraph = new SearchGraph(board, snake.id);

        it("maps the correct locations for food", () => {
            expect(searchGraph.atCoordinates(4, 4)).toBe(GraphObjects.FOOD);
        })

        it("maps the correct locations for self", () => {
            expect(searchGraph.atCoordinates(0, 0)).toBe(GraphObjects.SELF);
            expect(searchGraph.atCoordinates(0, 1)).toBe(GraphObjects.SELF);
        })
        
        it("maps the correct locations for enemies", () => {
            expect(searchGraph.atCoordinates(2, 2)).toBe(GraphObjects.ENEMY);
        })
    })
})