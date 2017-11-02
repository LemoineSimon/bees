class StateManager {
    constructor() {
        this.game;
        this.MAX_STORE = 5101000;
    }
    save(game) {
        let strGame = this.constructor.stringifyGame(game);
        if (strGame > this.MAX_STORE) {
            return this.saveError();
        }
        window.localStorage.setItem('bees', strGame);

    }
    static stringifyGame(game) {
        return JSON.stringify(game);
    }
    saveError() {
        // Display error
        console.log('Sorry, the actual save is over Store Limit : ', this.MAX_STORE);
    }
}

module.exports = StateManager;