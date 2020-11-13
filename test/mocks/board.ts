import { self, enemySnake, friendSnake } from "./snake";

import { Board } from "../../src/types/GameTypes";

export const board: Board = {
    height: 11,
    width: 11,
    food: [
        {x: 1, y: 1},
        {x: 7, y: 7}
    ],
    hazards: [],
    snakes: [
        self
    ]
}

export const enemyBoard: Board = {
    height: 11,
    width: 11,
    food: [
        {x: 1, y: 1},
        {x: 7, y: 7}
    ],
    hazards: [],
    snakes: [
        self,
        enemySnake
    ]
}

export const squadBoard: Board = {
    height: 11,
    width: 11,
    food: [
        {x: 1, y: 1},
        {x: 7, y: 7}
    ],
    hazards: [],
    snakes: [
        self,
        enemySnake,
        friendSnake
    ]
}