export type Location = {
    x: number;
    y: number;
};

export type Move = "up" | "down" | "left" | "right";

export const Moves: { [key: string]: Move} = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right"
};

export type Board = {
    height: number;
    width: number;
    food: Location[];
    hazards: Location[];
    snakes: Battlesnake[];
};

export type Battlesnake = {
    id: string;
    name: string;
    health: number;
    body: Location[];
    latency: string;
    head: Location;
    length: number;
    shout: string;
    squad: string;
};

export type Game = {
    id: string;
    ruleset: {
        name: string;
        version: string;
    };
    timeout: number;
};