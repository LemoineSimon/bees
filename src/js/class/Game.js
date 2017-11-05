import Hive from './Hive';
import Bee from './Bee';

class Game {
    constructor() {
        this.start = false;
        this.money = 0;
        this.hives = [];
        this.bees = {
            'princess': [],
            'drone': []
        };
        this.ressources = {
            honey: [],
            wood: 0,
            comb: []
        };
    }
    init() {
        this.start = true;
    }
    _load(params) {
        this.start = params.start;
        this.money = params.money;
        this.ressources = params.ressources;
        this._loadHives(params.hives);
        this._loadBees(params.bees);
    }

    _loadHives(hives) {
        for (var i = 0; i < hives.length; i++) {
            let tempHive = new Hive(i);
            tempHive._load(hives[i]);
            this.hives.push(tempHive);
        }
    }
    _loadBees(bees) {
        for (let role in bees) {
            for (let i = 0; i < bees[role].length; i++) {
                let beeParams = bees[role][i];
                let bee = new Bee(beeParams);
                this.bees[role].push(bee);
            }
        }
    }
    addHive() {
        let hive = new Hive(this.hives.length);
        this.hives.push(hive);
    }
    collectPrincess(hive) {
        let princess = hive.nursery.princess.splice(0, 1)[0];
        this.bees.princess.push(princess);
    }
    collectDrone(hive, droneIndex) {
        let drone = hive.nursery.drone.splice(droneIndex, 1, null)[0];
        this.bees.drone.push(drone);
    }
    collectLoot(hive, lootIndex) {
        let loot = hive.loots.splice(lootIndex, 1, null)[0];
        this.ressources[loot.name].push(loot);
    }
    loggingWood() {
        this.ressources['wood'] += parseInt(2);
    }

}

module.exports = Game;