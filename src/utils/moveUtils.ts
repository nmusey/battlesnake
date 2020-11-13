import { Move, Moves, Location, Battlesnake } from "../types/GameTypes";
import { GraphObjects, SearchGraph } from "./SearchGraph";

export const getRandomMove = (): Move => {
    const allMoves = Object.values(Moves)
    
    return allMoves[Math.floor( Math.random() * allMoves.length )] as Move;
}

export const locationAfterMove = (location: Location, move: Move): Location => {
    const moves = {
        [Moves.UP]:    { x: location.x,     y: location.y + 1 }, 
        [Moves.DOWN]:  { x: location.x,     y: location.y - 1 }, 
        [Moves.RIGHT]: { x: location.x + 1, y: location.y     }, 
        [Moves.LEFT]:  { x: location.x - 1, y: location.y     }
    }

    return moves[move];
}

export const isValidMove = (searchGraph: SearchGraph, location: Location, move: Move): boolean => {
    const collisionObjects = [
        GraphObjects.ENEMY,
        GraphObjects.FRIEND,
        GraphObjects.SELF,
        GraphObjects.HAZARD
    ]

    const queryLocation = locationAfterMove(location, move);

    if (
        queryLocation.x < 0 || 
        queryLocation.x >= searchGraph.width ||
        queryLocation.y < 0 ||
        queryLocation.y >= searchGraph.height
    ) {
        return false;
    }

    return !collisionObjects.includes(searchGraph.atLocation(queryLocation));
}

export const validMoves = (searchGraph: SearchGraph, location: Location): Move[] => {
    const movesArray = Object.values(Moves).filter(move => isValidMove(searchGraph, location, move));
    return movesArray as Move[];
}