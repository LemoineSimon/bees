class StateManager {
    constructor() {
        this.game;
        this.MAX_STORE = 5101000;
    }
    static getSave() {
        return window.localStorage.getItem('bees');
    }
    saveExist() {
        if (this.constructor.getSave()) {
            return true;
        }
        return false;
    }
    save(game) {
        let strGame = this.constructor.stringifyGame(game);
        if (strGame > this.MAX_STORE) {
            return console.log('Sorry, the actual save is over Store Limit : ', this.MAX_STORE);
        }
        window.localStorage.setItem('bees', strGame);

    }

    static stringifyGame(game) {
        return JSON.stringify(game);
    }
}

module.exports = StateManager;