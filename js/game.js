import Constants from './constants.js';
import Ball from './ball.js';
import Paddle from './paddle.js';

class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.ballX = width / 2;
        this.ballY = height / 2;

        this.ball = new Ball(this.ballX, this.ballY, Constants.BALL_RADIUS);
        this.paddle1 = new Paddle();
        this.paddle2 = new Paddle();

        this.view = null;
    }
};

export default Game;