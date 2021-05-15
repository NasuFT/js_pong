class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;

        view.game = game;
        game.view = view;

        setInterval(() => this.draw(), 10);
    }

    draw() {
        this.view.drawBall(this.game.ball);
    }
}

export default Controller;
