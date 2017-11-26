import Vue from './vue';
import Game from './class/Game';
import State from './class/StateManager';
import Crafter from './class/Crafter';

const state = new State();

const game = new Game();

const crafter = new Crafter();

Vue.component('hive', {
    template: "#hive",
    props: [
        'hive'
    ],
    methods: {
        selectBee: function(beeRole){
            console.log('selectBee');
            app.$emit('openModal',{
                'hive':this,
                'beeRole': beeRole
            });
        },
        addBee: function(bee){
            let result = this.hive.addBee(bee);
            if(result.type == 'added'){
                console.log('success');
                app.game.bees[bee.type][bee.role]--;
            }else if(result.type == 'changed'){
                app.game.bees[bee.type][bee.role]--;
                app.game.bees[result.oldBee.type][result.oldBee.role]++;
                console.log(result.text);
            }else{
                console.log(result.text);
            }
            
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
                'parts':[
                    {
                        name: 'Bees',
                        data: game.bees
                    },
                    {
                        name: 'Ressources',
                        data: game.ressources
                    }
                ],
                'currentCategory' : 0
            }
        }
    }
});

Vue.component('beemodal',{
    template:"#beemodal",
    data:function(){
        return {
            'bees': game.bees,
            'beeRole': 'princess',
            'modalShown' : false,
            'referalHive': null,
            'position':{
                x:0,
                y:0
            }
        }
    },
    methods: {
        selectBee: function(beeType, beeRole){
            this.modalShown = false;
            this.referalHive.addBee({'type':beeType, 'role':beeRole});
        }
    },
    created: function(){
        let self = this;
        this.$parent.$on('openModal', function (data) {
            
            self.beeRole = data.beeRole;
            self.referalHive = data.hive;
            self.modalShown = true;
            let slotIndex = data.beeRole == 'princess' ? 0 : 1;
            self.position.x = self.referalHive.$el.querySelectorAll('.hive__starter .slot')[slotIndex].getBoundingClientRect().left + 30;
            self.position.y = self.referalHive.$el.querySelectorAll('.hive__starter .slot')[slotIndex].getBoundingClientRect().top + 10;
        });
    }
})

let app = new Vue({
    el: "#app",
    data: {
        state: state,
        game: game
    },
    methods: {
        newGame: function() {
            if (this.state.saveExist()) {
                console.log('Are you sure');
                return;
            }
            this.game.init();
        },
        continueGame: function() {
            if (!this.state.saveExist()) {
                console.log('save not exist');
                return;
            }
            let load = this.state.load();
            this.game._load(load);
        },
        saveGame: function() {
            this.state.save(this.game);
        },
        addHive: function() {
            this.game.addHive();
        },
        loggingWood: function() {
            this.game.loggingWood();
        },
        catchBees: function() {
            this.game.catchBees();
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

