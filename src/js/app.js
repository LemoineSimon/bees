import Vue from './vue';
import Game from './class/Game';
import State from './class/StateManager';

const state = new State();

const game = new Game();

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


Vue.component('inventory',{
    template: "#inventory",
    data: function(){
        return {
            'inventory':{
                'categories' : ['Bees','Ressources'],
                'categoryActive' : 0,
                'categoriesContent': [
                    game.bees,
                    game.ressources
                ]
            }
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
        },
        continueGame: function() {
            if (!state.saveExist()) {
                console.log('save not exist');
                return;
            }
            let load = state.load();
            game._load(load);
        },
        saveGame: function() {
            state.save(game);
        },
        addHive: function() {
            game.addHive();
        },
        loggingWood: function() {
            game.loggingWood();
        },
        catchBees: function() {
            game.catchBees();
            this.refreshBees();
        },
        refreshBees: function(){
            this.game.bees = Object.assign({}, this.game.bees, game.bees);
        }
    },
    computed : {
        totalPrincess : function(){
            let total = 0;
            for( let beeType in this.game.bees){
                total += this.game.bees[beeType].princess;
            }
            return total;
        },
        totalDrone : function(){
            let total = 0;
            for( let beeType in this.game.bees){
                total += this.game.bees[beeType].drone;
            }
            return total;
        }
    }
});