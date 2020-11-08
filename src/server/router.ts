import { Router } from 'express';

import { Controller } from '../Controller';

import { InfoResponse } from '../types/communications/InfoResponse';
import { GameStartRequest, GameEndRequest } from '../types/communications/GameRequest';
import { MoveRequest, MoveResponse } from '../types/communications/MoveCommunications';
import { Move } from '../types/GameTypes';

export const router = Router();

const controller = new Controller();

router.get("/", (req, res) => {
    const infoResponse: InfoResponse = {
        apiVersion: "1",
        author: "Nick Musey",
        color: "#FFA200",
        head: "tongue",
        version: "0"
    };

    res.send(JSON.stringify(infoResponse));
});

router.post("/start", (req, res) => {
    const gameStartRequest: GameStartRequest = req.body;
    controller.start(gameStartRequest.game);
    res.send();
});

router.post("/end", (req, res) => {
    const gameEndRequest: GameEndRequest = req.body;
    controller.end(gameEndRequest.game);
    res.send();
});

router.post("/move", (req, res) => {
    const moveRequest: MoveRequest = req.body;

    const gameTracker = controller.getGameController(moveRequest.game);
    const nextMove: Move = gameTracker.getMove();

    const moveResponse: MoveResponse = {
        move: nextMove,
        shout: "---"
    };

    res.send(JSON.stringify(moveResponse));
})

router.get("*", (req, res) => {
    res.status(404).send("Route not found");
});

export default router;