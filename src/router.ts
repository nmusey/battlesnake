import { Router } from 'express';

import { InfoResponse } from './types/communications/InfoResponse';
import { GameStartRequest, GameEndRequest } from './types/communications/GameRequest';
import { MoveDecider } from './utils/MoveDecider';

export const router = Router();

const moveDecider = new MoveDecider();

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

    res.send();
});

router.post("/end", (req, res) => {
    console.log("POST /end");
    const GameEndRequest: GameEndRequest = req.body;

    res.send();
});

router.post("/move", (req, res) => {
    console.log("POST /move");

    const nextMove = moveDecider.getMove();

    const moveResponse = {
        move: nextMove,
        shout: "---"
    };

    res.send(JSON.stringify(moveResponse));
})

router.get("*", (req, res) => {
    res.status(404).send("Route not found");
});

export default router;