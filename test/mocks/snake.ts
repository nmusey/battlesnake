import { Battlesnake } from "../../src/types/GameTypes";

export const self: Battlesnake = {
    id: "1",
    name: "self",
    health: 100,
    body: [
        {x: 1, y: 1},
        {x: 1, y: 2},
        {x: 1, y: 3}
    ],
    latency: "100",
    head: {x: 1, y: 1},
    length: 3,
    shout: "SELF-SHOUT",
    squad: "1"
}

export const enemySnake: Battlesnake = {
    id: "2",
    name: "enemy",
    health: 100,
    body: [
        {x: 7, y: 3},
        {x: 7, y: 4},
        {x: 7, y: 5}
    ],
    latency: "100",
    head: {x: 7, y: 3},
    length: 3,
    shout: "ENEMY-SHOUT",
    squad: "2"
}

export const friendSnake: Battlesnake = {
    id: "3",
    name: "friend",
    health: 100,
    body: [
        {x: 5, y: 3},
        {x: 5, y: 4},
        {x: 5, y: 5}
    ],
    latency: "100",
    head: {x: 5, y: 3},
    length: 3,
    shout: "FRIEND-SHOUT",
    squad: "1"
}