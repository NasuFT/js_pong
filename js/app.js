import Constants from './constants.js';
import Controller from './controller.js';
import Game from './game.js';
import View from './view.js';

class App {
    constructor(view) {
        this._view = new View(view);
        this._game = new Game(Constants.GAME_WIDTH, Constants.GAME_HEIGHT);

        this._controller = new Controller(this._game, this._view);
    }
}

export default App;
