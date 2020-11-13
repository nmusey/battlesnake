import { Board, Location } from "../types/GameTypes";

export enum GraphObjects {
    NOTHING = " ---- ",
    FOOD =    " food ",
    HAZARD =  "hazard",
    SELF =    " self ",
    ENEMY =   "enemy ",
    FRIEND =  "friend",
};

export class SearchGraph {
    height: number;
    width: number;
    board: GraphObjects[][];
    
    constructor(board: Board, snakeId?: string, squad?: string) {
        this.height = board.height;
        this.width = board.width;

        this.board = [];
        for (let y = 0; y < this.width; y++) {
            this.board.push([]);
            for(let x = 0; x < this.width; x++) {
                this.board[y].push(GraphObjects.NOTHING);
            }
        }

        board.food.forEach(location => this.board[location.y][location.x] = GraphObjects.FOOD);
        board.hazards.forEach(location => this.board[location.y][location.x] = GraphObjects.HAZARD);
        board.snakes.forEach(snake => {
            if (snake.id == snakeId) {
                snake.body.forEach(location => this.board[location.y][location.x] = GraphObjects.SELF);
            } else if (squad && snake.squad == squad) {
                snake.body.forEach(location => this.board[location.y][location.x] = GraphObjects.FRIEND);
            } else {
                snake.body.forEach(location => this.board[location.y][location.x] = GraphObjects.ENEMY);
            }
        });
    }

    atCoordinates = (x: number, y: number): GraphObjects => this.board[y][x];
    atLocation = (location: Location): GraphObjects => this.board[location.y][location.x];
}