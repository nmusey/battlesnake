# Battlesnake

## Setup
Setup for this project is pretty standard. Just install the npm dependencies.

To start, ensure that node and npm are installed using `node --version && npm --version`.

### Packages
Run `npm install` to install all packages.

## Running the snake

### Testing
To test, use `npm test`.
The test coverage goal is 100%. Test coverage can be found using `npm run test:coverage`.

### Running the Server Locally
To run the server locally, run `npm start`.

### Deployment
SSH into the EC2 instance and pull the changes to the local repo. Run `npm run build` then `sudo pm2 restart`.

## High Level Overview
The server runs a single `Controller` which keeps track of individual games using `GameController`s. Each `GameController` looks after things like deciding a move or tracking the state of the game. 

Choosing a move is done through a `Strategy`. Custom logic should extend this base class.