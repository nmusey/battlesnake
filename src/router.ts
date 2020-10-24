import {Router} from 'express';

import {InfoResponse} from './types/communications/InfoResponse';
import {GameStartRequest, GameEndRequest} from './types/communications/GameRequest';
import {MoveRequest, MoveResponse} from './types/communications/MoveCommunications';
import { decideMove } from './utils/decideMove';

export const router = Router();

router.get("/", (req, res) => {
    console.log("GET /");

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
    console.log("POST /start");
    const GameStartRequest: GameStartRequest = req.body;

    res.status(200).send();
});

router.post("/end", (req, res) => {
    console.log("POST /end");
    const GameEndRequest: GameEndRequest = req.body;

    res.status(200).send();
});

router.post("/move", (req, res) => {
    console.log("POST /move");

    const moveRequest: MoveRequest = req.body;

    const nextMove = decideMove(moveRequest.board);

    const moveResponse = {
        move: nextMove,
        shout: "---"
    };

    res.send(JSON.stringify(moveResponse));
})