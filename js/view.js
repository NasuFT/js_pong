class View {
    constructor(view) {
        this.view = view;
        this.context = view.getContext("2d");

        this.width = view.width;
        this.height = view.height;

        this.game = null;
    }

    drawBall(ball) {
        const ctx = this.context;

        const ballX = (ball.x / this.game.width) * this.width;
        const ballY = (ball.y / this.game.height) * this.height;
        const ballRadiusX = (ball.radius / this.game.width) * this.width;
        const ballRadiusY = (ball.radius / this.game.height) * this.height;

        ctx.beginPath();
        ctx.ellipse(ballX, ballY, ballRadiusX, ballRadiusY, 0, 0, 2*Math.PI);
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();
    }
};

export default View;