import Bee from '../factory/beeFactory';

class Hive {
    constructor(id) {
        this.id = id;
        this.bees = {
            'queen': [],
            'princess': [],
            'drone': []
        };
        this.nursery = {
            'princess': [],
            'drone': new Array(3)
        }
        this.loots = new Array(3);
        this.temperature = 20;
        this.humidity = 20;
        this.currentTime = 0;
        this.currentState = 0;
        this.currentProgress = 0;
        this.states = [{
                type: "waiting",
                time: null
            },
            {
                type: "starting",
                time: 300
            },
            {
                type: "running",
                time: 1000
            },
            {
                type: "finish",
                time: null
            }
        ];
    }
    _load(data) {
        Object.assign(this, data);
        this._loadBees(data.bees);
        this._loadNursery(data.nursery);
    }
    _loadBees(bees) {
        for (let role in bees) {
            for (let i = 0; i < bees[role].length; i++) {
                let beeParams = bees[role][i];
                let bee = Bee.create(beeParams);
                this.bees[role].fill(bee, i, i + 1);
            }
        }
    }
    _loadNursery(nursery) {
        for (let beeRole in nursery) {
            for (let i = 0; i < nursery[beeRole].length; i++) {
                let beeParams = nursery[beeRole][i];
                if (beeParams == null) {
                    continue;
                }
                let bee = Bee.create(beeParams);
                this.nursery[beeRole].fill(bee, i, i + 1);
            }
        }
    }
    progress() {
        let self = this;
        let now = Date.now();
        if (this.currentTime == 0) {
            this.currentTime = now;
        }
        var progress = now - this.currentTime;
        if (progress < this.states[this.currentState].time) {
            this.currentProgress = Math.ceil((progress / this.states[this.currentState].time) * 100);
            setTimeout(function() {
                self.progress();
            }, 50);
        } else {
            this.nextState();
        }
    }
    nextState() {
        this.currentState++;
        if (this.states[this.currentState].type == "starting") {
            this.start();
        }
        if (this.states[this.currentState].type == "running") {
            this.run();
        }
        if (this.states[this.currentState].type == "finish") {
            this.finish();
        }
    }
    start() {
        if (((this.bees.princess.length >= 0 && this.bees.drone.length == 0) || (this.bees.princess.length == 0 && this.bees.drone.length > 0)) && this.bees.queen.length == 0) {
            console.log("0");
            return;
        }
        if (this.states[this.currentState].type != "waiting") {
            console.log("1");
            return;
        }
        this.currentState++;
        this.currentProgress = 0;
        this.currentTime = 0;
        this.progress();
    }
    run() {
        if (this.bees.queen.length == 0) {
            this.bees.drone.shift();
            let queen = this.bees.princess[0];
            queen.swarming();
            this.bees.queen.push(queen);
            this.bees.princess.shift();
        }
        this.currentProgress = 0;
        this.currentTime = 0;
        this.progress();
    }
    continue () {
        this.currentState--;
        this.progress();
    }
    finish() {
        this.currentTime = 0;
        this.currentProgress = 100;

        this.updateQueen();
    }
    waiting() {
        this.currentState = 0;
        this.currentProgress = 0;
        this.currentTime = 0;
    }

    addBee(bee) {
        // Need one bee per role
        let result = {
            type: 'denied',
            text: 'Same type of bee already in this hive'
        }
        if(this.bees[bee.role].length > 0){
            if(this.bees[bee.role][0].type != bee.type){
                let oldBee = this.bees[bee.role][0];
                this.bees[bee.role].shift();
                this.bees[bee.role].push(Bee.create({ role: bee.role, type: bee.type }));
                result.type = 'changed';
                result.text = 'You successfully changed your bee in this hive';
                result.oldBee = oldBee;
            }
        }else{
            this.bees[bee.role].push(Bee.create({ role: bee.role, type: bee.type }));
            result.type = 'added';
            result.text = 'You succesfully added your bee in this hive';
        }
        return result;
    }

    isProductionEmpty() {
        let droneEmpty = this.nursery.drone.filter(function(drone) {
            return drone ? true : false;
        });
        let lootsEmpty = this.loots.filter(function(loot) {
            return loot ? true : false;
        });
        if (this.nursery.princess.length || droneEmpty.length || lootsEmpty.length) {
            return false;
        }
        return true;
    }
    resetState() {
        this.waiting();
    }
    generateComb() {
        if (!this.bees.queen[0].produceComb) {
            return;
        }
        this.loots.fill(this.bees.queen[0].comb, 0, 1);
    }

    updateQueen() {
        let queen = this.bees.queen[0];
        if (--queen.life == 0) {
            // Generation des princess
            this.generatePrincess();
            // Generation des drones
            this.generateDrone();
            // Generation des combs
            this.generateComb();

            this.bees.queen.shift();
        } else {
            this.continue();
        }
    }
    generatePrincess() {
        this.nursery.princess.push(Bee.create({ role: "princess", type: "forest" }));
    }
    generateDrone() {
        this.nursery.drone.fill(null);
        for (var i = 0; i < this.bees.queen[0].larveNumber; i++) {
            this.nursery.drone.fill(Bee.create({ role: "drone",type: "forest" }), i, i + 1);
        }
    }
}

module.exports = Hive;