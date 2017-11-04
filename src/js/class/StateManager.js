class StateManager {
    constructor() {
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
        let strGame = JSON.stringify(game);
        if (strGame > this.MAX_STORE) {
            return console.log('Sorry, the actual save is over Store Limit : ', this.MAX_STORE);
        }
        window.localStorage.setItem('bees', strGame);
    }
    load() {
        let save = window.localStorage.getItem('bees');
        return JSON.parse(save);
    }

}

module.exports = StateManager;