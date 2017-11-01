import Vue from './vue';
import Game from './class/Game';


const game = new Game();
game.addHive();

let farm = new Vue({
    el: "#farm",
    data: {
        'hives': game.hives
    },
    methods: {
        addPrincess: function(index) {
            this.hives[index].addBee("princess");
        },
        addDrone: function(index) {
            this.hives[index].addBee("drone");
        },
        start: function(index) {
            this.hives[index].start();
        },
        isHiveProductionEmpty(index) {
            return this.hives[index].isProductionEmpty();
        },
        canResetHiveState(index) {
            if (!this.isHiveProductionEmpty(index)) {
                return;
            }
            this.hives[index].resetState();
        },
        collectPrincess: function(hiveIndex) {
            game.collectPrincess(hiveIndex);
            this.canResetHiveState(hiveIndex);
        },
        collectDrone: function(hiveIndex, droneIndex) {
            game.collectDrone(hiveIndex, droneIndex);
            this.canResetHiveState(hiveIndex);
        }
    },
    computed: {
        currentState: function() {
            return this.hives.map(function(hive) {
                return hive.states[hive.currentState].type;
            });
        }
    }
});

let statusBar = new Vue({
    el: "#statusBar",
    data: {
        'money': game.money,
        'bees': game.bees,
        'hives': game.hives.length
    }
});