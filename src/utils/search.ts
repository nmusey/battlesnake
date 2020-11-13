import { GraphObjects, SearchGraph } from "./SearchGraph";
import { validMoves } from "../utils/moveUtils";

import { Move, Moves, Board, Battlesnake, Location } from "../types/GameTypes";

export type Heuristic = (location: Location, goalLocation: Location) => number;

export const squareRootDistance: Heuristic = (location: Location, goalLocation: Location): number => {
    return Math.sqrt( (location.x - goalLocation.x) ** 2 + (location.y - goalLocation.y) ** 2 );
}

export const dijkstra = (heuristic: Heuristic) => (board: Board, startLocation: Location, goalType: GraphObjects): Move => {
    type DijkstraNode = {
        location: Location,
        previousNode: DijkstraNode | null,
        score: number
    };

    const searchGraph = new SearchGraph(board, startLocation);
    const visited: Set<Location> = new Set();
    let current: DijkstraNode = {
        location: startLocation,
        previousNode: null,
        score: 0
    };

    const neighbours = validMoves(searchGraph, current.location);
    neighbours.forEach(neighbour => {
        if (searchGraph.atLocation(neighbour) == goalType) {
            return 
        }

        if (!visited.has(neighbour)) {
            visited.add(neighbour, )
        }
    })



    return Moves.DOWN;
}