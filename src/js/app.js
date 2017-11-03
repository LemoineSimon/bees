import Vue from './vue';
import Game from './class/Game';
import State from './class/StateManager';

const state = new State();


const game = new Game();

// let farm = new Vue({
Vue.component('hive', {
    template: "#hive",
    props: [
        'hive'
    ],
    methods: {
        addPrincess: function() {
            this.hive.addBee("princess");
        },
        addDrone: function() {
            this.hive.addBee("drone");
        },
        start: function() {
            this.hive.start();
        },
        isHiveProductionEmpty() {
            return this.hive.isProductionEmpty();
        },
        canResetHiveState() {
            if (!this.isHiveProductionEmpty()) {
                return;
            }
            this.hive.resetState();
        },
        collectPrincess: function() {
            game.collectPrincess(this.hive);
            this.canResetHiveState();
        },
        collectDrone: function(droneIndex) {
            game.collectDrone(this.hive, droneIndex);
            this.canResetHiveState();
        },
        collectLoot: function(lootIndex) {
            game.collectLoot(this.hive, lootIndex);
            this.canResetHiveState();
        }
    },
    computed: {
        currentState: function() {
            return this.hive.states[this.hive.currentState].type;
        }
    }
});

let app = new Vue({
    el: "#app",
    data: {
        state: state,
        game: game
    },
    methods: {
        newGame: function() {
            if (state.saveExist()) {
                console.log('Are you sure');
                return;
            }
            game.init();
            game.addHive();
        },
        continueGame: function() {
            if (!state.saveExist()) {
                console.log('save not exist');
                return;
            }
        },
        saveGame: function() {
            state.save(game);
        }
    }
});