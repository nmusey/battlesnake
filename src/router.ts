import {Router} from 'express';

import {InfoResponse} from './types/communications/InfoResponse';
import {GameStartRequest, GameEndRequest} from './types/communications/GameRequest';
import {MoveRequest, MoveResponse} from './types/communications/MoveCommunications';

export const router = Router();

router.get("/", (req, res) => {
    const infoResponse: InfoResponse = {
        apiVersion: "1",
        author: "GetOutMeSwamp",
        color: "#FFA200",
        head: "tongue",
        version: "0"
    };

    res.send(JSON.stringify(infoResponse));
});

router.post("/start", (req, res) => {
    const GameStartRequest: GameStartRequest = req.body;

    res.status(200).send();
});

router.post("/end", (req, res) => {
    const GameEndRequest: GameEndRequest = req.body;

    res.status(200).send();
});

router.post("/move", (req, res) => {
    const moveRequest: MoveRequest = req.body

    const moveResponse = {
        move: "up",
        shout: "AAAHHH"
    };

    res.send(JSON.stringify(moveResponse));
})